#include <QSettings>

#include "PlayniteLaunchHelper.h"
#include "PlayniteMetadataParser.h"
#include "PlayniteGame.h"

namespace providers {
	namespace playnite {

		QString GameLaunchInfo::build_launch_cmd()
		{
			return QStringLiteral("\"%1\" %2").arg(exec_path, args);
		}

		struct PlayniteLaunchHelper::Impl {

			std::unique_ptr<QString> steam_call;

			QString get_steam_call()
			{
				if (!steam_call) {
					QSettings reg_base(QStringLiteral("HKEY_CURRENT_USER\\Software\\Valve\\Steam"), QSettings::NativeFormat);
					QString reg_value = reg_base.value(QLatin1String("SteamExe")).toString();
					steam_call = std::make_unique<QString>(reg_value);
				}
				return *steam_call;
			}

			GameLaunchInfo get_game_launch_info(const PlayniteGame game_info, const PlayniteComponents& components)
			{
				GameLaunchInfo launch_info;
				const auto play_action = game_info.playAction;
				const auto play_action_type = play_action.type;
				if (play_action_type == 0)
				{
					launch_info.type = GameLaunchInfo::GameLaunchType::INSTALLED;
					auto working_dir = play_action.workingDir;
					if (working_dir == QStringLiteral("{InstallDir}"))
						working_dir = game_info.installDirectory;

					launch_info.exec_path = game_info.installDirectory + "/" + play_action.path;
					launch_info.path = launch_info.exec_path;
					launch_info.args = play_action.arguments;
					launch_info.working_dir = working_dir;
				}
				else if (play_action_type == 1)
				{
					const auto source = components.sources.value(game_info.sourceId);
					if (source == "Steam") {
						launch_info.type = GameLaunchInfo::GameLaunchType::STEAM;
						launch_info.path = play_action.path;
						launch_info.exec_path = get_steam_call();
						launch_info.args = play_action.path + " " + play_action.arguments;
					}
				}
				else
				{
					launch_info.type = GameLaunchInfo::GameLaunchType::EMULATOR;
					const auto emulator = components.emulators.value(play_action.emulatorId);
					const auto emu_profile = emulator.profiles.value(play_action.emulatorProfileId);
					QString arguments = emu_profile.arguments;
					arguments.replace("\"{ImagePath}\"", "{file.path}");

					launch_info.path = game_info.gameImagePath;
					launch_info.exec_path = emu_profile.executable;
					launch_info.args = arguments;
					launch_info.working_dir = emu_profile.working_dir;
				}
				return launch_info;
			}
		};

		QString PlayniteLaunchHelper::get_steam_call()
		{
			return impl_->get_steam_call();
		}

		GameLaunchInfo PlayniteLaunchHelper::get_game_launch_info(const PlayniteGame game_info, const PlayniteComponents& components)
		{
			return impl_->get_game_launch_info(game_info, components);
		}

		PlayniteLaunchHelper::PlayniteLaunchHelper()
			:impl_(std::make_unique<Impl>())
		{
		}

		PlayniteLaunchHelper::~PlayniteLaunchHelper() = default;
	}
}
