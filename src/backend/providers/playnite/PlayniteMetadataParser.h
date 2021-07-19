#pragma once

#include "PlayniteGame.h"
#include "Emulator.h"

namespace providers {
	namespace playnite {
		PlayniteGame parse_game_file(const QString& filePath);
		Emulator parse_emulator_file(const QString& filePath);
	}
}

