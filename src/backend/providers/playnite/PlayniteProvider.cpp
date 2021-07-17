// Pegasus Frontend
// Copyright (C) 2017-2020  Mátyás Mustoha
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program. If not, see <http://www.gnu.org/licenses/>.


#include "PlayniteProvider.h"

#include "Log.h"
#include "Paths.h"
#include "model/gaming/Assets.h"
#include "model/gaming/Game.h"
#include "model/gaming/GameFile.h"
#include "providers/SearchContext.h"
#include "utils/PathTools.h"

#include <QDirIterator>
#include <QStringBuilder>
#include <array>
#include <QJsonDocument>
#include <QJsonObject>
#include <QJsonArray>
#include <QSettings>
#include <QString>
#include <qtextdocument.h>

#include "providers/Provider.h"
#include "providers/launchbox/LaunchBoxGamelistXml.h"
#include "utils/CommandTokenizer.h"

namespace {

	std::unique_ptr<QString> steam_call{};

	struct Emulator
	{
		struct EmulatorProfile
		{
			QString id;
			QString name;
			QStringList platform_ids;
			QString executable;
			QString arguments;
			QString working_dir;
		};

		QString id;
		QString name;
		QHash<QString, EmulatorProfile> profiles;
	};

	struct PlayniteComponents
	{
		QHash<QString, QString> sources;
		QHash<QString, Emulator> emulators;
		QHash<QString, QString> platforms;
		QHash<QString, QString> companies;
		QHash<QString, QString> genres;
	};

	QString default_installation()
	{
		return paths::homePath() + "/AppData/Roaming" + QStringLiteral("/Playnite/");
	}

	QString get_steam_call()
	{
		if (!steam_call) {
			QSettings reg_base(QStringLiteral("HKEY_CURRENT_USER\\Software\\Valve\\Steam"), QSettings::NativeFormat);
			QString reg_value = reg_base.value(QLatin1String("SteamExe")).toString();
			steam_call = std::make_unique<QString>(reg_value);
		}
		return *steam_call;
	}

	QHash<QString, QVariant> get_json_map(const QString& file_path)
	{
		QFile file(file_path);
		if (!file.open(QIODevice::ReadOnly | QIODevice::Text)) {
			Log::info(LOGMSG("Could not open %1").arg(QDir::toNativeSeparators(file_path)));
			return {};
		}

		QJsonParseError jsonError{};
		const QJsonDocument json_doc = QJsonDocument::fromJson(file.readAll(), &jsonError);
		if (jsonError.error != QJsonParseError::NoError) {
			Log::info(LOGMSG("Invalid JSON file at %1").arg(file_path));
			return {};
		}
		return json_doc.object().toVariantHash();
	}

	QHash<QString, QString> find_names(const QDir& dir, const QString& path)
	{
		QHash<QString, QString> output;
		QDirIterator dir_it(dir.filePath(path),
			QStringList() << "*.json",
			QDir::Files | QDir::Readable | QDir::NoDotAndDotDot);
		while (dir_it.hasNext())
		{
			auto file_path = dir_it.next();
			const auto map = get_json_map(file_path);
			QString name = map.value("Name").toString();
			QString id = map.value("Id").toString();
			output.insert(id, name);
		}
		return output;
	}

	QHash<QString, Emulator> find_emulators(const QDir& dir)
	{
		QHash<QString, Emulator> output;
		QDirIterator dir_it(dir.filePath("library/emulators/"),
			QStringList() << "*.json",
			QDir::Files | QDir::Readable | QDir::NoDotAndDotDot);
		while (dir_it.hasNext())
		{
			auto file_path = dir_it.next();
			Emulator emu;
			const auto map = get_json_map(file_path);
			emu.id = map.value("Id").toString();
			emu.name = map.value("name").toString();
			auto profiles = map.value("Profiles").toJsonArray();
			for (const auto& profile : profiles)
			{
				Emulator::EmulatorProfile emu_profile;
				auto profile_map = profile.toObject().toVariantHash();
				emu_profile.platform_ids = profile_map.value("Platforms").toStringList();
				emu_profile.executable = profile_map.value("Executable").toString();
				emu_profile.arguments = profile_map.value("Arguments").toString();
				emu_profile.working_dir = profile_map.value("WorkingDirectory").toString();
				emu_profile.id = profile_map.value("Id").toString();
				emu_profile.name = profile_map.value("Name").toString();
				emu.profiles.insert(emu_profile.id, emu_profile);
			}
			output.insert(emu.id, emu);
		}
		return output;
	}

	void apply_game_fields(
		model::Game& game,
		const PlayniteComponents& components,
		const QHash<QString, QVariant>& game_map,
		const QDir& playnite_dir)
	{
		const auto name = game_map.value("Name").toString();
		game.setTitle(name);

		const auto description_html = game_map.value("Description").toString();
		QTextDocument doc;
		doc.setHtml(description_html);
		const auto description = doc.toPlainText();

		if (game.description().isEmpty())
			game.setDescription(description);
		if (game.summary().isEmpty())
			game.setSummary(description);

		const auto developer_ids = game_map.value("DeveloperIds").toStringList();
		for (const auto& developer_id : developer_ids)
		{
			auto developer = components.companies.value(developer_id);
			game.developerList().append(developer);
		}

		const auto publisher_ids = game_map.value("PublisherIds").toStringList();
		for (const auto& publisher_id : publisher_ids)
		{
			auto publisher = components.companies.value(publisher_id);
			game.publisherList().append(publisher);
		}

		const auto genre_ids = game_map.value("GenreIds").toStringList();
		for (const auto& genre_id : genre_ids)
		{
			auto genre = components.companies.value(genre_id);
			game.genreList().append(genre);
		}

		const auto release_date = game_map.value("ReleaseDate").toString();
		if (!game.releaseDate().isValid())
			game.setReleaseDate(QDate::fromString(release_date, Qt::ISODate));

		const auto score = game_map.value("CommunityScore").toFloat();
		game.setRating(score / 20.0f);

		const QString playnite_dir_path = playnite_dir.absolutePath();
		const QString id = game_map.value("id").toString();

		const QString cover_image_filename = game_map.value("CoverImage").toString();
		if (!cover_image_filename.isEmpty()) {
			const QString cover_path = playnite_dir_path + "/library/files/" + id + "/" + cover_image_filename;
			game.assetsMut().add_file(AssetType::BOX_FRONT, cover_path);
		}

		const QString bg_image_filename = game_map.value("BackgroundImage").toString();
		if (!bg_image_filename.isEmpty()) {
			const QString bg_path = playnite_dir_path + "/library/files/" + id + "/" + bg_image_filename;
			game.assetsMut().add_file(AssetType::BACKGROUND, bg_path);
		}
	}
	enum class GameLaunchType
	{
		STEAM,
		INSTALLED,
		EMULATOR
	};

	struct GameLaunchInfo
	{
		GameLaunchType type;
		QString path;
		QString exec_path;
		QString args;
		QString working_dir;

		QString build_launch_cmd()
		{
			return QStringLiteral("\"%1\" %2").arg(exec_path, args);
		}
	};

	GameLaunchInfo get_game_launch_info(const QHash<QString, QVariant>& game_map, PlayniteComponents components)
	{
		const auto play_action_obj = game_map.value("PlayAction").toJsonObject();
		const auto play_action_map = play_action_obj.toVariantHash();
		const auto play_action_type = play_action_map.value("Type").toInt();
		GameLaunchInfo launch_info;
		if (play_action_type == 0)
		{
			launch_info.type = GameLaunchType::INSTALLED;
			const auto install_dir = game_map.value("InstallDirectory").toString();
			const auto path = play_action_map.value("Path").toString();
			const auto args = play_action_map.value("Arguments").toString();
			auto working_dir = play_action_map.value("WorkingDir").toString();
			if (working_dir == QStringLiteral("{InstallDir}"))
				working_dir = install_dir;

			launch_info.exec_path = install_dir + "/" + path;
			launch_info.path = launch_info.exec_path;
			launch_info.args = args;
			launch_info.working_dir = working_dir;
		}
		else if (play_action_type == 1)
		{
			const auto uri = play_action_map.value("Path").toString();
			const auto args = play_action_map.value("Arguments").toString();
			const auto source_id = game_map.value("SourceId").toString();
			const auto source = components.sources.value(source_id);

			if (source == "Steam") {
				launch_info.type = GameLaunchType::STEAM;
				launch_info.path = uri;
				launch_info.exec_path = get_steam_call();
				launch_info.args = uri + " " + args;
			}
		}
		else
		{
			launch_info.type = GameLaunchType::EMULATOR;
			const auto game_image_path = game_map.value("GameImagePath").toString();
			const auto emulator_id = play_action_map.value("EmulatorId").toString();
			const auto emulator_profile_id = play_action_map.value("EmulatorProfileId").toString();
			const auto emu_profile = components.emulators.value(emulator_id).profiles.value(emulator_profile_id);
			QString arguments = emu_profile.arguments;
			arguments.replace("\"{ImagePath}\"", "{file.path}");

			launch_info.path = game_image_path;
			launch_info.exec_path = emu_profile.executable;
			launch_info.args = arguments;
			launch_info.working_dir = emu_profile.working_dir;
		}
		return launch_info;
	}

	QVector<model::Game*> create_games(const QDir& dir, const PlayniteComponents& components, providers::SearchContext& sctx)
	{
		QVector<model::Game*> output;
		QDirIterator dir_it(dir.filePath("library/games/"),
			QStringList() << "*.json",
			QDir::Files | QDir::Readable | QDir::NoDotAndDotDot);
		while (dir_it.hasNext())
		{
			auto json_file_path = dir_it.next();
			QHash<QString, QVariant> game_map = get_json_map(json_file_path);

			const auto name = game_map.value("Name").toString();
			const auto installed = game_map.value("IsInstalled", false).toBool();
			const auto hidden = game_map.value("Hidden", false).toBool();
			if (!installed || hidden)
			{
				Log::info(LOGMSG("Skipping not installed or hidden game %1").arg(name));
				continue;
			}

			const auto platform_id = game_map.value("PlatformId").toString();
			auto platform_name = components.platforms.value(platform_id);
			//PC is handled by Pegasus default theme as "IBM".  We want "Windows" instead.
			if (platform_name == QLatin1String("PC"))
				platform_name = "Windows";

			model::Collection& collection = *sctx.get_or_create_collection(platform_name);
			auto launch_info = get_game_launch_info(game_map, components);

			model::Game* game_ptr = nullptr;
			if (launch_info.type == GameLaunchType::STEAM)
			{
				const auto game_id = game_map.value("GameId").toString();
				QString key = "steam:" + game_id;
				game_ptr = sctx.game_by_uri(key);
				if (!game_ptr) {
					game_ptr = sctx.create_game_for(collection);
					sctx.game_add_uri(*game_ptr, key);
				}
			}
			else {
				const QFileInfo finfo(launch_info.path);
				const QString abs_path = ::clean_abs_path(finfo);
				if (!finfo.exists()) {
					Log::info(LOGMSG("Game file `%1` doesn't seem to exist, entry ignored").arg(QDir::toNativeSeparators(launch_info.path)));
					continue;
				}

				game_ptr = sctx.game_by_filepath(launch_info.path);
				if (!game_ptr) {
					game_ptr = sctx.create_game_for(collection);
					sctx.game_add_filepath(*game_ptr, launch_info.path);
				}
			}

			game_ptr->setLaunchCmd(launch_info.build_launch_cmd());
			Log::info("SETTING LAUNCH CMD: " + game_ptr->launchCmd());

			Q_ASSERT(game_ptr);
			apply_game_fields(*game_ptr, components, game_map, dir);
			sctx.game_add_to(*game_ptr, collection);
			output.push_back(game_ptr);
		}
		return output;
	}
}

namespace providers {
	namespace playnite {

		PlayniteProvider::PlayniteProvider(QObject* parent)
			: Provider(QLatin1String("playnite"), QStringLiteral("Playnite"), parent)
		{}

		Provider& PlayniteProvider::run(SearchContext& sctx)
		{
			const auto playnite_dir_path = [this] {
				const auto option_it = options().find(QStringLiteral("installdir"));
				return (option_it != options().cend())
					? QDir::cleanPath(option_it->second.front()) + QLatin1Char('/')
					: default_installation();
			}();

			if (playnite_dir_path.isEmpty() || !QFileInfo::exists(playnite_dir_path)) {
				Log::info(display_name(), LOGMSG("No installation found"));
				return *this;
			}

			Log::info(display_name(), LOGMSG("Looking for installation at `%1`").arg(QDir::toNativeSeparators(playnite_dir_path)));
			const QDir playnite_dir(playnite_dir_path);

			PlayniteComponents components;
			components.platforms = find_names(playnite_dir, QStringLiteral("library/platforms"));
			components.sources = find_names(playnite_dir, QStringLiteral("library/sources"));
			components.companies = find_names(playnite_dir, QStringLiteral("library/companies"));
			components.genres = find_names(playnite_dir, QStringLiteral("library/genres"));
			components.emulators = find_emulators(playnite_dir);

			const QVector<model::Game*> games = create_games(playnite_dir, components, sctx);
			if (games.empty()) {
				Log::warning(display_name(), LOGMSG("No games found"));
			}
			return *this;
		}
	} // namespace playnite
} // namespace providers
