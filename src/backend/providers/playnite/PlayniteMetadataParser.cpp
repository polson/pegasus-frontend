#include <QDirIterator>

#include "PlayniteMetadataParser.h"

#include <QJsonObject>

#include "PlayniteJsonHelper.h"
#include "PlayniteGame.h"

namespace providers {
	namespace playnite {

		PlayniteGame parse_game_file(const QString& filePath)
		{
			PlayniteGame game;
			JsonObject gameJson = JsonObject(filePath);
			game.backgroundImage = gameJson.getString("BackgroundImage");
			game.communityScore = gameJson.getFloat("CommunityScore");
			game.coverImage = gameJson.getString("CoverImage");
			game.description = gameJson.getString("Description");
			game.developerIds = gameJson.getStringList("DeveloperIds");
			game.gameId = gameJson.getString("GameId");
			game.genreIds = gameJson.getString("GenreIds");
			game.id = gameJson.getString("Id");
			game.name = gameJson.getString("Name");
			game.platformId = gameJson.getString("PlatformId");
			game.publisherIds = gameJson.getStringList("PublisherIds");
			game.releaseDate = gameJson.getString("ReleaseDate");
			game.installed = gameJson.getBool("IsInstalled");
			game.hidden = gameJson.getBool("Hidden");
			game.sourceId = gameJson.getString("SourceId");
			game.installDirectory = gameJson.getString("InstallDirectory");
			game.gameImagePath = gameJson.getString("GameImagePath");

			const auto play_action_json = gameJson.getJsonObject("PlayAction");
			PlayniteGame::PlayAction action;
			action.arguments = play_action_json.getString("Arguments");
			action.path = play_action_json.getString("Path");
			action.workingDir = play_action_json.getString("WorkingDir");
			action.gameImagePath = play_action_json.getString("GameImagePath");
			action.emulatorId = play_action_json.getString("EmulatorId");
			action.emulatorProfileId = play_action_json.getString("EmulatorProfileId");
			action.type = play_action_json.getString("Type");
			game.playAction = action;
			return game;
		}

		Emulator parse_emulator_file(const QString& filePath)
		{
			Emulator emu;
			JsonObject emuJson = JsonObject(filePath);
			emu.id = emuJson.getString("Id");
			emu.name = emuJson.getString("name");
			auto profiles = emuJson.getJsonArray("Profiles");
			for (const auto& profile : profiles)
			{
				Emulator::EmulatorProfile emu_profile;
				auto profile_json = JsonObject(profile.toObject());
				emu_profile.platform_ids = profile_json.getStringList("Platforms");
				emu_profile.executable = profile_json.getString("Executable");
				emu_profile.arguments = profile_json.getString("Arguments");
				emu_profile.working_dir = profile_json.getString("WorkingDirectory");
				emu_profile.id = profile_json.getString("Id");
				emu_profile.name = profile_json.getString("Name");
				emu.profiles.insert(emu_profile.id, emu_profile);
			}
			return emu;
		}

	}
}