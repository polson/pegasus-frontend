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
#include "PlayniteGamesFinder.h"

namespace {
	QString default_installation()
	{
		return paths::homePath() + "/AppData/Roaming" + QStringLiteral("/Playnite/");
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

			const QVector<model::Game*> games = find_games(playnite_dir_path, sctx);
			if (games.empty()) {
				Log::warning(display_name(), LOGMSG("No games found"));
			}
			return *this;
		}
	} // namespace playnite
} // namespace providers
