target_sources(pegasus-backend PRIVATE
    Api.cpp
    Api.h
    device/DeviceInfo.cpp
    device/DeviceInfo.h
    gaming/Assets.cpp
    gaming/Assets.h
    gaming/Collection.cpp
    gaming/Collection.h
    gaming/Game.cpp
    gaming/Game.h
    gaming/GameFile.cpp
    gaming/GameFile.h
    internal/Gamepad.cpp
    internal/Gamepad.h
    internal/GamepadManager.cpp
    internal/GamepadManager.h
    internal/GamepadManagerBackend.cpp
    internal/GamepadManagerBackend.h
    internal/Internal.cpp
    internal/Internal.h
    internal/Meta.cpp
    internal/Meta.h
    internal/System.cpp
    internal/System.h
    internal/settings/KeyEditor.cpp
    internal/settings/KeyEditor.h
    internal/settings/Locales.cpp
    internal/settings/Locales.h
    internal/settings/Providers.cpp
    internal/settings/Providers.h
    internal/settings/Settings.cpp
    internal/settings/Settings.h
    internal/settings/Themes.cpp
    internal/settings/Themes.h
    keys/Key.cpp
    keys/Key.h
    keys/Keys.cpp
    keys/Keys.h
    memory/Memory.cpp
    memory/Memory.h
)


# Select gamepad implementation

if(PEGASUS_USE_SDL2_GAMEPAD)
    target_sources(pegasus-backend PRIVATE
        internal/GamepadManagerSDL2.cpp
        internal/GamepadManagerSDL2.h
    )
    target_compile_definitions(pegasus-backend PRIVATE WITH_SDL_GAMEPAD)
    set(USE_SDL2 ON CACHE INTERNAL "")
    set(GAMEPAD_IMPL_NAME "SDL2" CACHE INTERNAL "")
else()
    target_sources(pegasus-backend PRIVATE
        internal/GamepadManagerQt.cpp
        internal/GamepadManagerQt.h
    )
    pegasus_require_qt(COMPONENTS Gamepad)
    target_link_libraries(pegasus-backend PUBLIC Qt::Gamepad)
    set(GAMEPAD_IMPL_NAME "Qt" CACHE INTERNAL "")
endif()


# Select battery info implementation

if(PEGASUS_USE_SDL2_POWER)
    target_compile_definitions(pegasus-backend PRIVATE WITH_SDL_POWER)
    set(BATTERY_IMPL_NAME "SDL2" CACHE INTERNAL "")
    set(USE_SDL2 ON CACHE INTERNAL "")
elseif(PEGASUS_ON_ANDROID)
    set(BATTERY_IMPL_NAME "Android" CACHE INTERNAL "")
else()
    set(BATTERY_IMPL_NAME "Disabled" CACHE INTERNAL "")
endif()
