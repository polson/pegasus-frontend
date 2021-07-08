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


#include "LaunchBoxAssets.h"

#include "model/gaming/Assets.h"
#include "model/gaming/Game.h"

#include <QDirIterator>


namespace {

const QRegularExpression rx_invalid(QStringLiteral(R"([^a-zA-Z0-9])"));

QString format_title(const QString title)
{
    QString out = title.toLower();
    if (out.startsWith("the "))
    {
        out.remove(0, 4);
    }
    out.replace(rx_invalid, "");
    return out;
}

bool compare_title_length(QPair<QString, model::Game*> a, QPair<QString, model::Game*> b)
{
    return a.second->title().length() > b.second->title().length();
}

QVector<QPair<QString, model::Game*>> build_escaped_title_list(const std::vector<model::Game*>& games)
{
    QVector<QPair<QString, model::Game*>> out;
    for (model::Game* const game_ptr : games) {
        QString title = game_ptr->title();
        QString formatted = format_title(title);
        QPair<QString, model::Game*> pair;
        pair.first = std::move(formatted);
        pair.second = game_ptr;
        out.append(std::move(pair));
    }

    std::sort(out.begin(), out.end(), compare_title_length);

    return out;
}
} // namespace


namespace providers {
namespace launchbox {

Assets::Assets(QString log_tag, QString lb_root_path)
    : m_log_tag(std::move(log_tag))
    , m_lb_root_path(std::move(lb_root_path))
    , m_dir_list {
        { QStringLiteral("Advertisement Flyer - Front"), AssetType::POSTER },
        { QStringLiteral("Advertisement Flyer - Back"), AssetType::POSTER },

        { QStringLiteral("Box - Front"), AssetType::BOX_FRONT },
        { QStringLiteral("Box - Front - Reconstructed"), AssetType::BOX_FRONT },
        { QStringLiteral("Box - Back"), AssetType::BOX_BACK },
        { QStringLiteral("Box - Back - Reconstructed"), AssetType::BOX_BACK },

        { QStringLiteral("Arcade - Marquee"), AssetType::ARCADE_MARQUEE },
        { QStringLiteral("Arcade - Control Panel"), AssetType::ARCADE_PANEL },

        { QStringLiteral("Banner"), AssetType::ARCADE_MARQUEE },
        { QStringLiteral("Disc"), AssetType::CARTRIDGE },

        { QStringLiteral("Cart - Front"), AssetType::CARTRIDGE },
        { QStringLiteral("Cart - Back"), AssetType::CARTRIDGE },
        { QStringLiteral("Clear Logo"), AssetType::LOGO },

        { QStringLiteral("Screenshot - Gameplay"), AssetType::SCREENSHOT },
        { QStringLiteral("Screenshot - Game Select"), AssetType::SCREENSHOT },
        { QStringLiteral("Screenshot - Game Title"), AssetType::TITLESCREEN },
        { QStringLiteral("Screenshot - Game Over"), AssetType::SCREENSHOT },
        { QStringLiteral("Screenshot - High Scores"), AssetType::SCREENSHOT },

        { QStringLiteral("Fanart - Background"), AssetType::BACKGROUND },
        { QStringLiteral("Fanart - Box - Front"), AssetType::BOX_FRONT },
        { QStringLiteral("Fanart - Box - Back"), AssetType::BOX_BACK },
        { QStringLiteral("Fanart - Cart - Front"), AssetType::CARTRIDGE },
        { QStringLiteral("Fanart - Cart - Back"), AssetType::CARTRIDGE },
        { QStringLiteral("Fanart - Disc"), AssetType::CARTRIDGE },

        { QStringLiteral("Steam Banner"), AssetType::UI_STEAMGRID },
        { QStringLiteral("Steam Poster"), AssetType::POSTER },
        { QStringLiteral("Steam Screenshot"), AssetType::SCREENSHOT },
    }
    , rx_number_suffix(QStringLiteral(R"(-[0-9]{2}$)"))
{}

void Assets::find_assets_for(const QString& platform_name, const std::vector<model::Game*>& games) const
{
    const QVector<QPair<QString, model::Game*>> esctitle_to_game_list = build_escaped_title_list(games);

    const QString images_root = m_lb_root_path % QLatin1String("Images/") % platform_name % QLatin1Char('/');
    // TODO: C++17
    for (const auto& assetdir_pair : m_dir_list) {
        const QString assetdir_path = images_root + assetdir_pair.first;
        const AssetType assetdir_type = assetdir_pair.second;
        find_assets_in(assetdir_path, assetdir_type, esctitle_to_game_list);
    }

    const QString music_root = m_lb_root_path % QLatin1String("Music/") % platform_name % QLatin1Char('/');
    find_assets_in(music_root, AssetType::MUSIC, esctitle_to_game_list);

    const QString video_root = m_lb_root_path % QLatin1String("Videos/") % platform_name % QLatin1Char('/');
    find_assets_in(video_root, AssetType::VIDEO, esctitle_to_game_list);
}

void Assets::find_assets_in(
    const QString& asset_dir,
    const AssetType asset_type,
    const QVector<QPair<QString, model::Game*>>& title_to_game_map) const
{
    constexpr auto FIND_ONLY_FILES = QDir::Files | QDir::Readable | QDir::NoDotAndDotDot;
    constexpr auto ITER_RECURSIVE = QDirIterator::Subdirectories;

    QDirIterator file_it(asset_dir, FIND_ONLY_FILES, ITER_RECURSIVE);
    while (file_it.hasNext()) {
        QString path = file_it.next();
        const QString basename = file_it.fileInfo().completeBaseName();
        const QString formatted = format_title(basename);
        for (auto& item : title_to_game_map) {
            if (formatted.startsWith(item.first)) {
                item.second->assetsMut().add_file(asset_type, path);
                break;
            }
        }
    }
}

} // namespace launchbox
} // namespace providers
