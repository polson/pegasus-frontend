#pragma once

#include <QString>
#include <memory>
#include "PlayniteComponents.h"

namespace providers {
	namespace playnite {
		struct GameLaunchInfo
		{
			enum class GameLaunchType
			{
				STEAM,
				INSTALLED,
				EMULATOR
			};
			GameLaunchType type;
			QString path;
			QString exec_path;
			QString args;
			QString working_dir;
			QString build_launch_cmd();
		};

		class PlayniteLaunchHelper {
		public:
			QString get_steam_call();
			GameLaunchInfo get_game_launch_info(const PlayniteGame game_info, const PlayniteComponents& components);
			PlayniteLaunchHelper();
			~PlayniteLaunchHelper();
		private:
			struct Impl;
			std::unique_ptr<Impl> impl_;
		};
	}
}


