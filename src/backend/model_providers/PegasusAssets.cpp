// Pegasus Frontend
// Copyright (C) 2017  Mátyás Mustoha
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


#include "PegasusAssets.h"

#include "Model.h"
#include "Utils.h"

#include <QStringBuilder>


namespace model_providers {

void PegasusAssets::fill(const Model::Platform& platform, const Model::Game& game)
{
    static constexpr auto MEDIA_SUBDIR = "/media/";

    const QString path_base = platform.m_rom_dir_path
                              % MEDIA_SUBDIR
                              % game.m_rom_basename;

    // check if the media dir exists
    if (!validFile(platform.m_rom_dir_path % MEDIA_SUBDIR))
        return;

    // shortcut for the assets member
    Q_ASSERT(game.m_assets);
    Model::GameAssets& assets_ref = *game.m_assets;

    for (auto asset_type : Assets::singleTypes) {
        // the portable asset search is always the first,
        // so we don't have to do expensi if checks here
        Q_ASSERT(assets_ref.m_single_assets[asset_type].isEmpty());

        assets_ref.m_single_assets[asset_type] = Assets::findFirst(asset_type, path_base);
    }
    for (auto asset_type : Assets::multiTypes) {
        assets_ref.m_multi_assets[asset_type].append(Assets::findAll(asset_type, path_base));
    }
}

} // namespace model_providers
