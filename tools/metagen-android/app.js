!function(){"use strict";const e={ra:[{fullname:"Nintendo - SNES / Famicom (nSide Balanced)",sysname:"Super Nintendo Entertainment System",exts:"sfc, smc, gb, gbc, bml, rom",abbr:"snes",core:"higan_sfc_balanced_libretro_android.so"},{fullname:"Nintendo - Game Boy / Color (SameBoy)",sysname:"Game Boy/Game Boy Color",exts:"gb, gbc",abbr:"gb",core:"sameboy_libretro_android.so"},{fullname:"Nintendo - SNES / SFC (Snes9x 2002)",sysname:"Super Nintendo Entertainment System",exts:"smc, fig, sfc, gd3, gd7, dx2, bsx, swc",abbr:"snes",core:"snes9x2002_libretro_android.so"},{fullname:"Commodore - C64 SuperCPU (VICE xscpu64)",sysname:"C64 SuperCPU",exts:"d64, d71, d80, d81, d82, g64, g41, x64, t64, tap, prg, p00, crt, bin, zip, gz, d6z, d7z, d8z, g6z, g4z, x6z, cmd, m3u, vsf, nib, nbz",abbr:"commodore_64_supercpu",core:"vice_xscpu64_libretro_android.so"},{fullname:"Arcade (FB Alpha 2012 CPS-1)",sysname:"CP System I",exts:"zip",abbr:"fb_alpha",core:"fbalpha2012_cps1_libretro_android.so"},{fullname:"Uzebox (Uzem)",sysname:"Uzebox",exts:"uze",abbr:"uzebox",core:"uzem_libretro_android.so"},{fullname:"SNK - Neo Geo Pocket / Color (Beetle NeoPop)",sysname:"Neo Geo Pocket (Color)",exts:"ngp, ngc, ngpc, npc",abbr:"neo_geo_pocket",core:"mednafen_ngp_libretro_android.so"},{fullname:"Nintendo - Game Boy Advance (Meteor)",sysname:"Game Boy Advance",exts:"gba",abbr:"gba",core:"meteor_libretro_android.so"},{fullname:"Arcade (FB Alpha 2012)",sysname:"Arcade (various)",exts:"iso, zip, 7z",abbr:"fb_alpha",core:"fbalpha2012_libretro_android.so"},{fullname:"Arcade (MAME 2010)",sysname:"Arcade (various)",exts:"zip, 7z, chd",abbr:"mame",core:"mame2010_libretro_android.so"},{fullname:"Sega - MS/MD/CD/32X (PicoDrive)",sysname:"Sega 8/16-bit + 32X (Various)",exts:"bin, gen, smd, md, 32x, cue, iso, sms, 68k",abbr:"megadrive",core:"picodrive_libretro_android.so"},{fullname:"Nintendo - SNES / SFC (Snes9x 2005)",sysname:"Super Nintendo Entertainment System",exts:"smc, fig, sfc, gd3, gd7, dx2, bsx, swc",abbr:"snes",core:"snes9x2005_libretro_android.so"},{fullname:"Nintendo - Game Boy Advance (mGBA)",sysname:"Game Boy/Game Boy Color/Game Boy Advance",exts:"gb, gbc, gba",abbr:"gba",core:"mgba_libretro_android.so"},{fullname:"GCE - Vectrex (vecx)",sysname:"Vectrex",exts:"bin, vec",abbr:"vectrex",core:"vecx_libretro_android.so"},{fullname:"DOS (DOSBox-core)",sysname:"DOS",exts:"exe, com, bat, conf, cue, iso",abbr:"dos",core:"dosbox_core_libretro_android.so"},{fullname:"Nintendo - GameCube / Wii (Dolphin)",sysname:"GameCube / Wii",exts:"gcm, iso, wbfs, ciso, gcz, elf, dol, dff, tgc, wad",abbr:"gc",core:"dolphin_libretro_android.so"},{fullname:"SNK - Neo Geo Pocket / Color (RACE)",sysname:"Neo Geo Pocket (Color)",exts:"ngp, ngc, ngpc, npc",abbr:"neo_geo_pocket",core:"race_libretro_android.so"},{fullname:"Nintendo - SNES / SFC (bsnes C++98 (v085))",sysname:"Super Nintendo Entertainment System",exts:"sfc, smc",abbr:"snes",core:"bsnes_cplusplus98_libretro_android.so"},{fullname:"NEC - PC-FX (Beetle PC-FX)",sysname:"PC-FX",exts:"cue, ccd, toc, chd",abbr:"pc_fx",core:"mednafen_pcfx_libretro_android.so"},{fullname:"Bandai - WonderSwan/Color (Beetle Cygne)",sysname:"WonderSwan/Color",exts:"ws, wsc, pc2",abbr:"wonderswan",core:"mednafen_wswan_libretro_android.so"},{fullname:"Nintendo - SNES / SFC (bsnes-mercury Accuracy)",sysname:"Super Nintendo Entertainment System",exts:"sfc, smc, bml",abbr:"snes",core:"bsnes_mercury_accuracy_libretro_android.so"},{fullname:"Nintendo - NES / Famicom (fixNES)",sysname:"Nintendo Entertainment System",exts:"nes, fds, qd, nsf",abbr:"nes",core:"fixnes_libretro_android.so"},{fullname:"Nintendo - GameCube / Wii (Ishiiruka)",sysname:"GameCube / Wii",exts:"gcm, iso, wbfs, ciso, gcz, elf, dol, dff, tgc, wad",abbr:"gc",core:"ishiiruka_libretro_android.so"},{fullname:"Nintendo - Nintendo 64 (ParaLLEl N64)",sysname:"Nintendo 64",exts:"n64, v64, z64, bin, u1, ndd",abbr:"n64",core:"parallel_n64_libretro_android.so"},{fullname:"Sony - PlayStation (PCSX ReARMed)",sysname:"PlayStation",exts:"bin, cue, img, mdf, pbp, toc, cbn, m3u, ccd, chd",abbr:"psx",core:"pcsx_rearmed_libretro_android.so"},{fullname:"Commodore - VIC-20 (VICE xvic)",sysname:"VIC-20",exts:"20, 40, 60, a0, b0, d64, d71, d80, d81, d82, g64, g41, x64, t64, tap, prg, p00, crt, bin, zip, gz, d6z, d7z, d8z, g6z, g4z, x6z, cmd, m3u, vsf, nib, nbz",abbr:"commodore_vic_20",core:"vice_xvic_libretro_android.so"},{fullname:"Arcade (FB Alpha 2012 CPS-3)",sysname:"CP System III",exts:"zip",abbr:"fb_alpha",core:"fbalpha2012_cps3_libretro_android.so"},{fullname:"DOS (DOSBox-SVN)",sysname:"DOS",exts:"exe, com, bat, conf, cue, iso",abbr:"dos",core:"dosbox_svn_libretro_android.so"},{fullname:"Commodore - CBM-II (VICE xcbm2)",sysname:"CBM-II",exts:"d64, d71, d80, d81, d82, g64, g41, x64, t64, tap, prg, p00, crt, bin, zip, gz, d6z, d7z, d8z, g6z, g4z, x6z, cmd, m3u, vsf, nib, nbz",abbr:"commodore_cbm2",core:"vice_xcbm2_libretro_android.so"},{fullname:"Arcade (FinalBurn Neo)",sysname:"Arcade (various)",exts:"zip, 7z, cue",abbr:"fb_alpha",core:"fbneo_libretro_android.so"},{fullname:"Sega - Dreamcast (RetroDream)",sysname:"Sega Dreamcast",exts:"gdi, chd, cdi",abbr:"dreamcast",core:"retrodream_libretro_android.so"},{fullname:"Nintendo - Virtual Boy (Beetle VB)",sysname:"Virtual Boy",exts:"vb, vboy, bin",abbr:"virtualboy",core:"mednafen_vb_libretro_android.so"},{fullname:"Sega - MS/GG/SG-1000 (Gearsystem)",sysname:"Sega 8-bit (MS/GG/SG-1000)",exts:"sms, gg, sg, bin, rom",abbr:"mastersystem",core:"gearsystem_libretro_android.so"},{fullname:"Arcade (Daphne)",sysname:"Arcade (various)",exts:"zip",abbr:"daphne",core:"daphne_libretro_android.so"},{fullname:"Commodore - PLUS/4 (VICE xplus4)",sysname:"PLUS/4",exts:"d64, d71, d80, d81, d82, g64, g41, x64, t64, tap, prg, p00, crt, bin, zip, gz, d6z, d7z, d8z, g6z, g4z, x6z, cmd, m3u, vsf, nib, nbz",abbr:"commodore_plus_4",core:"vice_xplus4_libretro_android.so"},{fullname:"Nintendo - SNES / SFC (bsnes-mercury Balanced)",sysname:"Super Nintendo Entertainment System",exts:"sfc, smc, bml",abbr:"snes",core:"bsnes_mercury_balanced_libretro_android.so"},{fullname:"CHIP-8 (Emux CHIP-8)",sysname:"CHIP-8",exts:"ch8, bin, rom",abbr:"chip_8",core:"emux_chip8_libretro_android.so"},{fullname:"Commodore - Amiga (FS-UAE)",sysname:"Commodore Amiga",exts:"adf, ipf, fs-uae",abbr:"amiga",core:"fsuae_libretro_android.so"},{fullname:"Nintendo - NES / Famicom (bnes)",sysname:"Nintendo Entertainment System",exts:"nes",abbr:"nes",core:"bnes_libretro_android.so"},{fullname:"Multi (UME 2015)",sysname:"Multi (various)",exts:"zip, chd, 7z",abbr:"mame",core:"ume2015_libretro_android.so"},{fullname:"Commodore - PET (VICE xpet)",sysname:"PET",exts:"d64, d71, d80, d81, d82, g64, g41, x64, t64, tap, prg, p00, crt, bin, zip, gz, d6z, d7z, d8z, g6z, g4z, x6z, cmd, m3u, vsf, nib, nbz",abbr:"commodore_pet",core:"vice_xpet_libretro_android.so"},{fullname:"The 3DO Company - 3DO (Opera)",sysname:"3DO",exts:"iso, bin, chd, cue",abbr:"3do",core:"opera_libretro_android.so"},{fullname:"Nintendo - Pokemon Mini (PokeMini)",sysname:"Pokemon Mini",exts:"min",abbr:"pokemon_mini",core:"pokemini_libretro_android.so"},{fullname:"Sega - Mega Drive - Genesis (BlastEm)",sysname:"Sega Genesis",exts:"md, bin, smd, gen",abbr:"megadrive",core:"blastem_libretro_android.so"},{fullname:"Nintendo - Game Boy / Color (fixGB)",sysname:"Game Boy/Game Boy Color",exts:"gb, gbc, gbs",abbr:"gb",core:"fixgb_libretro_android.so"},{fullname:"Sega - Dreamcast/NAOMI (Flycast GLES2)",sysname:"Sega Dreamcast",exts:"chd, cdi, iso, elf, bin, cue, gdi, lst, zip, dat, 7z, m3u",abbr:"dreamcast",core:"flycast_gles2_libretro_android.so"},{fullname:"NEC - PC-8000 / PC-8800 series (QUASI88)",sysname:"PC-8000 / PC-8800 series",exts:"d88, u88, m3u",abbr:"pc_88",core:"quasi88_libretro_android.so"},{fullname:"Amstrad - CPC (CrocoDS)",sysname:"CPC",exts:"dsk, sna, kcr",abbr:"cpc",core:"crocods_libretro_android.so"},{fullname:"Commodore - Amiga (UAE4ARM)",sysname:"Commodore Amiga",exts:"adf, dms, zip, ipf, adz, uae",abbr:"amiga",core:"uae4arm_libretro_android.so"},{fullname:"Atari - ST/STE/TT/Falcon (Hatari)",sysname:"Atari ST/STE/TT/Falcon",exts:"st, msa, zip, stx, dim, ipf, m3u",abbr:"atarist",core:"hatari_libretro_android.so"},{fullname:"Nintendo - Nintendo 64 (ParaLLEl) (Debug)",sysname:"Nintendo 64",exts:"n64, v64, z64, bin, u1, ndd",abbr:"n64",core:"parallel_n64_debug_libretro_android.so"},{fullname:"Nintendo - Game Boy / Color (Gearboy)",sysname:"Game Boy/Game Boy Color",exts:"gb, dmg, gbc, cgb, sgb",abbr:"gb",core:"gearboy_libretro_android.so"},{fullname:"Arcade (FB Alpha 2012 Neo Geo)",sysname:"Neo Geo",exts:"zip",abbr:"fb_alpha",core:"fbalpha2012_neogeo_libretro_android.so"},{fullname:"Sega - Master System (Emux SMS)",sysname:"Sega Master System",exts:"sms, bin, rom",abbr:"mastersystem",core:"emux_sms_libretro_android.so"},{fullname:"Nintendo - SNES / SFC (Beetle bsnes)",sysname:"Super Nintendo Entertainment System",exts:"smc, fig, bs, st, sfc",abbr:"snes",core:"mednafen_snes_libretro_android.so"},{fullname:"Nintendo - NES / Famicom (QuickNES)",sysname:"Nintendo Entertainment System",exts:"nes",abbr:"nes",core:"quicknes_libretro_android.so"},{fullname:"Sega - Saturn (YabaSanshiro)",sysname:"Saturn",exts:"bin, ccd, chd, cue, iso, mds, zip",abbr:"saturn",core:"yabasanshiro_libretro_android.so"},{fullname:"Sony - PlayStation (DuckStation)",sysname:"PlayStation",exts:"cue, bin, img, chd, m3u",abbr:"psx",core:"duckstation_libretro_android.so"},{fullname:"Nintendo - Nintendo 64 (Mupen64Plus-Next GLES2)",sysname:"Nintendo 64",exts:"n64, v64, z64, bin, u1",abbr:"n64",core:"mupen64plus_next_gles2_libretro_android.so"},{fullname:"NEC - PC Engine / CD (Beetle PCE FAST)",sysname:"PC Engine/PCE-CD",exts:"pce, cue, ccd, iso, img, bin, chd",abbr:"pc_engine",core:"mednafen_pce_fast_libretro_android.so"},{fullname:"Sony - PlayStation (Beetle PSX HW)",sysname:"PlayStation",exts:"cue, toc, m3u, ccd, exe, pbp, chd",abbr:"psx",core:"mednafen_psx_hw_libretro_android.so"},{fullname:"Sega - Dreamcast/NAOMI (Flycast)",sysname:"Sega Dreamcast",exts:"chd, cdi, iso, elf, bin, cue, gdi, lst, zip, dat, 7z, m3u",abbr:"dreamcast",core:"flycast_libretro_android.so"},{fullname:"NEC - PC Engine / SuperGrafx / CD (Beetle PCE)",sysname:"PC Engine/SuperGrafx/CD",exts:"pce, cue, ccd, iso, img, bin, chd",abbr:"pc_engine",core:"mednafen_pce_libretro_android.so"},{fullname:"Nintendo - Game Boy Advance (TempGBA)",sysname:"Game Boy Advance",exts:"gba, bin, agb, gbz",abbr:"gba",core:"tempgba_libretro_android.so"},{fullname:"Nintendo - SNES / SFC (bsnes-hd beta)",sysname:"Super Nintendo Entertainment System",exts:"sfc, smc, gb, gbc",abbr:"snes",core:"bsnes_hd_beta_libretro_android.so"},{fullname:"Atari - Lynx (Beetle Lynx)",sysname:"Lynx",exts:"lnx, o",abbr:"atarilynx",core:"mednafen_lynx_libretro_android.so"},{fullname:"Nintendo - SNES / SFC (Snes9x 2005 Plus)",sysname:"Super Nintendo Entertainment System",exts:"smc, fig, sfc, gd3, gd7, dx2, bsx, swc",abbr:"snes",core:"snes9x2005_plus_libretro_android.so"},{fullname:"NEC - PC-98 (Neko Project II Kai)",sysname:"PC-98",exts:"d98, zip, 98d, fdi, fdd, 2hd, tfd, d88, 88d, hdm, xdf, dup, cmd, hdi, thd, nhd, hdd, hdn",abbr:"pc_98",core:"np2kai_libretro_android.so"},{fullname:"Sony - PlayStation Portable (PPSSPP)",sysname:"PSP",exts:"elf, iso, cso, prx, pbp",abbr:"psp",core:"ppsspp_libretro_android.so"},{fullname:"Nintendo - Game Boy / Color (Gambatte)",sysname:"Game Boy/Game Boy Color",exts:"gb, gbc, dmg",abbr:"gb",core:"gambatte_libretro_android.so"},{fullname:"Nintendo - SNES / SFC / Game Boy / Color (Mesen-S)",sysname:"Super Nintendo Entertainment System / Game Boy / Game Boy Color",exts:"sfc, smc, fig, swc, bs, gb, gbc",abbr:"snes",core:"mesen-s_libretro_android.so"},{fullname:"Commodore - C64 (VICE x64sc, accurate)",sysname:"C64",exts:"d64, d71, d80, d81, d82, g64, g41, x64, t64, tap, prg, p00, crt, bin, zip, gz, d6z, d7z, d8z, g6z, g4z, x6z, cmd, m3u, vsf, nib, nbz",abbr:"c64",core:"vice_x64sc_libretro_android.so"},{fullname:"Atari - 5200 (Atari800)",sysname:"Atari 5200",exts:"xfd, atr, atx, cdm, cas, bin, a52, xex, zip",abbr:"atari5200",core:"atari800_libretro_android.so"},{fullname:"Commodore - C64 (VICE SDL)",sysname:"C64",exts:"d64, d71, d80, d81, d82, g64, , g41, x64, t64, tap, prg, p00, crt, bin, zip, gz, d6z, d7z, d8z, g6z, g4z, x6z",abbr:"c64",core:"x64sdl_libretro_android.so"},{fullname:"Sony - PlayStation (PCSX ReARMed) [Interpreter]",sysname:"PlayStation",exts:"bin, cue, img, mdf, pbp, cbn, toc, chd",abbr:"psx",core:"pcsx_rearmed_interpreter_libretro_android.so"},{fullname:"Nintendo - Game Boy Advance (VBA-M)",sysname:"Game Boy/Game Boy Color/Game Boy Advance",exts:"dmg, gb, gbc, cgb, sgb, gba",abbr:"gba",core:"vbam_libretro_android.so"},{fullname:"Arcade (MAME - Current)",sysname:"Arcade (various)",exts:"zip, chd, 7z, cmd",abbr:"mame",core:"mame_libretro_android.so"},{fullname:"Nintendo - SNES / SFC (bsnes 2014 Performance)",sysname:"Super Nintendo Entertainment System",exts:"sfc, smc, bml",abbr:"snes",core:"bsnes2014_performance_libretro_android.so"},{fullname:"Arcade (FB Alpha 2012 CPS-2)",sysname:"CP System II",exts:"zip",abbr:"fb_alpha",core:"fbalpha2012_cps2_libretro_android.so"},{fullname:"Amstrad - CPC (Caprice32)",sysname:"CPC",exts:"dsk, sna, zip, tap, cdt, voc, m3u",abbr:"cpc",core:"cap32_libretro_android.so"},{fullname:"Commodore - Amiga (P-UAE)",sysname:"Commodore Amiga",exts:"adf, adz, dms, fdi, ipf, hdf, hdz, lha, cue, ccd, nrg, mds, iso, uae, m3u, zip",abbr:"amiga",core:"puae_libretro_android.so"},{fullname:"Nintendo - NES / Famicom (FCEUmm)",sysname:"Nintendo Entertainment System",exts:"fds, nes, unif, unf",abbr:"nes",core:"fceumm_libretro_android.so"},{fullname:"Nintendo - SNES / Famicom (higan Accuracy)",sysname:"Super Nintendo Entertainment System",exts:"sfc, smc, gb, gbc, bml, rom",abbr:"snes",core:"higan_sfc_libretro_android.so"},{fullname:"Arcade (MAME 2003-Plus)",sysname:"Arcade (various)",exts:"zip",abbr:"mame",core:"mame2003_plus_libretro_android.so"},{fullname:"DOS (DOSBox)",sysname:"DOS",exts:"exe, com, bat, conf",abbr:"dos",core:"dosbox_libretro_android.so"},{fullname:"Atari - 7800 (ProSystem)",sysname:"Atari 7800",exts:"a78, bin",abbr:"atari7800",core:"prosystem_libretro_android.so"},{fullname:"NEC - PC Engine SuperGrafx (Beetle SuperGrafx)",sysname:"PC Engine SuperGrafx",exts:"pce, sgx, cue, ccd, chd",abbr:"pc_engine",core:"mednafen_supergrafx_libretro_android.so"},{fullname:"Sega - Saturn/ST-V (Kronos)",sysname:"Saturn",exts:"ccd, chd, cue, iso, mds, zip, m3u",abbr:"saturn",core:"kronos_libretro_android.so"},{fullname:"Java ME (SquirrelJME)",sysname:"Java ME",exts:"jar",abbr:"J2ME",core:"squirreljme_libretro_android.so"},{fullname:"Nintendo - Game Boy Advance (gpSP)",sysname:"Game Boy Advance",exts:"gba, bin",abbr:"gba",core:"gpsp_libretro_android.so"},{fullname:"Atari - 2600 (Stella 2014)",sysname:"Atari 2600",exts:"a26, bin",abbr:"atari2600",core:"stella2014_libretro_android.so"},{fullname:"DOS (DOSBox-SVN CE)",sysname:"DOS",exts:"exe, com, bat, conf, cue, iso",abbr:"dos",core:"dosbox_svn_ce_libretro_android.so"},{fullname:"Atari - Lynx (Handy)",sysname:"Lynx",exts:"lnx, o",abbr:"atarilynx",core:"handy_libretro_android.so"},{fullname:"Nintendo - SNES / SFC (bsnes 2014 Accuracy)",sysname:"Super Nintendo Entertainment System",exts:"sfc, smc, bml",abbr:"snes",core:"bsnes2014_accuracy_libretro_android.so"},{fullname:"Nintendo - Game Boy / Color (TGB Dual)",sysname:"Game Boy/Game Boy Color",exts:"gb, gbc, sgb",abbr:"gb",core:"tgbdual_libretro_android.so"},{fullname:"Sharp - X68000 (PX68k)",sysname:"Sharp X68000",exts:"dim, zip, img, d88, 88d, hdm, dup, 2hd, xdf, hdf, cmd, m3u",abbr:"sharp_x68000",core:"px68k_libretro_android.so"},{fullname:"Nintendo - Game Boy Advance (Beetle GBA)",sysname:"Game Boy Advance",exts:"gba, agb, bin",abbr:"gba",core:"mednafen_gba_libretro_android.so"},{fullname:"Arcade (MAME 2016)",sysname:"Arcade (various)",exts:"zip, chd, 7z, cmd",abbr:"mame",core:"mame2016_libretro_android.so"},{fullname:"Nintendo - Nintendo 64 (Mupen64Plus-Next GLES3)",sysname:"Nintendo 64",exts:"n64, v64, z64, bin, u1",abbr:"n64",core:"mupen64plus_next_gles3_libretro_android.so"},{fullname:"Arcade (MAME 2003)",sysname:"Arcade (various)",exts:"zip",abbr:"mame",core:"mame2003_libretro_android.so"},{fullname:"Sega - MS/GG/MD/CD (Genesis Plus GX)",sysname:"Sega 8/16-bit (Various)",exts:"mdx, md, smd, gen, bin, cue, iso, sms, gg, sg, 68k, chd",abbr:"megadrive",core:"genesis_plus_gx_libretro_android.so"},{fullname:"NEC - PC-98 (Neko Project II)",sysname:"PC-98",exts:"d98, zip, 98d, fdi, fdd, 2hd, tfd, d88, 88d, hdm, xdf, dup, cmd, hdi, thd, nhd, hdd",abbr:"pc_98",core:"nekop2_libretro_android.so"},{fullname:"Nintendo - Nintendo 64 (Mupen64Plus-Next)",sysname:"Nintendo 64",exts:"n64, v64, z64, bin, u1",abbr:"n64",core:"mupen64plus_next_libretro_android.so"},{fullname:"Commodore - CBM-5x0 (VICE xcbm5x0)",sysname:"CBM-5x0",exts:"d64, d71, d80, d81, d82, g64, g41, x64, t64, tap, prg, p00, crt, bin, zip, gz, d6z, d7z, d8z, g6z, g4z, x6z, cmd, m3u, vsf, nib, nbz",abbr:"commodore_cbm5x0",core:"vice_xcbm5x0_libretro_android.so"},{fullname:"MSX/SVI/ColecoVision/SG-1000 (blueMSX)",sysname:"MSX/SVI/ColecoVision/SG-1000",exts:"rom, ri, mx1, mx2, col, dsk, cas, sg, sc, m3u",abbr:"msx",core:"bluemsx_libretro_android.so"},{fullname:"Nintendo - NES / Famicom (Emux NES)",sysname:"Nintendo Entertainment System",exts:"nes, bin, rom",abbr:"nes",core:"emux_nes_libretro_android.so"},{fullname:"Atari - 2600 (Stella)",sysname:"Atari 2600",exts:"a26, bin",abbr:"atari2600",core:"stella_libretro_android.so"},{fullname:"Nintendo - DS (melonDS)",sysname:"Nintendo DS",exts:"nds",abbr:"nds",core:"melonds_libretro_android.so"},{fullname:"Arcade (MAME 2000)",sysname:"Arcade (various)",exts:"zip, 7z, chd",abbr:"mame",core:"mame2000_libretro_android.so"},{fullname:"Nintendo - SNES / SFC (bsnes-mercury Performance)",sysname:"Super Nintendo Entertainment System",exts:"sfc, smc, bml",abbr:"snes",core:"bsnes_mercury_performance_libretro_android.so"},{fullname:"Nintendo - NES / Famicom (Nestopia UE)",sysname:"Nintendo Entertainment System",exts:"nes, fds, unf, unif",abbr:"nes",core:"nestopia_libretro_android.so"},{fullname:"Sony - PlayStation 2 (Play!)",sysname:"Sony PlayStation 2",exts:"iso, isz, cso, bin, elf",abbr:"ps2",core:"play_libretro_android.so"},{fullname:"Commodore - C64 (VICE x64, fast)",sysname:"C64",exts:"d64, d71, d80, d81, d82, g64, g41, x64, t64, tap, prg, p00, crt, bin, zip, gz, d6z, d7z, d8z, g6z, g4z, x6z, cmd, m3u, vsf, nib, nbz",abbr:"c64",core:"vice_x64_libretro_android.so"},{fullname:"The 3DO Company - 3DO (4DO)",sysname:"3DO",exts:"iso, bin, chd, cue",abbr:"3do",core:"4do_libretro_android.so"},{fullname:"Sega - Saturn (Yabause)",sysname:"Saturn",exts:"bin, ccd, chd, cue, iso, mds, zip",abbr:"saturn",core:"yabause_libretro_android.so"},{fullname:"Nintendo - DS (DeSmuME 2015)",sysname:"DS",exts:"nds, bin",abbr:"nds",core:"desmume2015_libretro_android.so"},{fullname:"Nintendo - Nintendo 64 (Mupen64Plus-Next Develop)",sysname:"Nintendo 64",exts:"n64, v64, z64, bin, u1",abbr:"n64",core:"mupen64plus_next_develop_libretro_android.so"},{fullname:"Sony - PlayStation (Rustation)",sysname:"PlayStation",exts:"cue, toc, m3u, ccd, exe",abbr:"psx",core:"rustation_libretro_android.so"},{fullname:"Microsoft - MSX (fMSX)",sysname:"MSX",exts:"rom, mx1, mx2, dsk, cas",abbr:"msx",core:"fmsx_libretro_android.so"},{fullname:"Nintendo - DS (DeSmuME)",sysname:"DS",exts:"nds, bin",abbr:"nds",core:"desmume_libretro_android.so"},{fullname:"Sony - PlayStation (Beetle PSX)",sysname:"PlayStation",exts:"cue, toc, m3u, ccd, exe, pbp, chd",abbr:"psx",core:"mednafen_psx_libretro_android.so"},{fullname:"Arcade (MAME 2009)",sysname:"Arcade (various)",exts:"zip, 7z, chd",abbr:"mame",core:"mame2009_libretro_android.so"},{fullname:"Magnavox - Odyssey2 / Phillips Videopac+ (O2EM)",sysname:"Magnavox Odyssey2 / Phillips Videopac+",exts:"bin",abbr:"odyssey2",core:"o2em_libretro_android.so"},{fullname:"Arcade (MAME 2015)",sysname:"Arcade (various)",exts:"zip, chd, 7z, cmd",abbr:"mame",core:"mame2015_libretro_android.so"},{fullname:"Nintendo - SNES / SFC (Snes9x 2010)",sysname:"Super Nintendo Entertainment System",exts:"smc, fig, sfc, gd3, gd7, dx2, bsx, swc",abbr:"snes",core:"snes9x2010_libretro_android.so"},{fullname:"Sega - Saturn (Beetle Saturn)",sysname:"Saturn",exts:"ccd, chd, cue, toc, m3u",abbr:"saturn",core:"mednafen_saturn_libretro_android.so"},{fullname:"Mattel - Intellivision (FreeIntv)",sysname:"Intellivision",exts:"int, bin, rom",abbr:"intellivision",core:"freeintv_libretro_android.so"},{fullname:"Sony - PlayStation (PCSX1)",sysname:"PlayStation",exts:"bin, cue, img, mdf, pbp, toc, cbn, m3u",abbr:"psx",core:"pcsx1_libretro_android.so"},{fullname:"Nintendo - 3DS (Citra Canary/Experimental)",sysname:"3DS",exts:"3ds, 3dsx, elf, axf, cci, cxi, app",abbr:"3ds",core:"citra_canary_libretro_android.so"},{fullname:"Sony - PlayStation (PCSX ReARMed) [NEON]",sysname:"PlayStation",exts:"bin, cue, img, mdf, pbp, toc, cbn, m3u, chd",abbr:"psx",core:"pcsx_rearmed_libretro_neon.info"},{fullname:"Nintendo - NES / Famicom (Mesen)",sysname:"Nintendo Entertainment System",exts:"nes, fds, unf, unif",abbr:"nes",core:"mesen_libretro_android.so"},{fullname:"Sinclair - ZX 81 (EightyOne)",sysname:"ZX81",exts:"p, tzx, t81",abbr:"zx81",core:"81_libretro_android.so"},{fullname:"Atari - Jaguar (Virtual Jaguar)",sysname:"Jaguar",exts:"j64, jag, rom, abs, cof, bin, prg",abbr:"atarijaguar",core:"virtualjaguar_libretro_android.so"},{fullname:"Nintendo - Game Boy Advance (VBA Next)",sysname:"Game Boy Advance",exts:"gba",abbr:"gba",core:"vba_next_libretro_android.so"},{fullname:"Nintendo - SNES / SFC (bsnes 2014 Balanced)",sysname:"Super Nintendo Entertainment System",exts:"sfc, smc, bml",abbr:"snes",core:"bsnes2014_balanced_libretro_android.so"},{fullname:"Arcade (MAME 2003 Midway)",sysname:"Arcade (various)",exts:"zip",abbr:"mame",core:"mame2003_midway_libretro_android.so"},{fullname:"Sinclair - ZX Spectrum (Fuse)",sysname:"ZX Spectrum (various)",exts:"tzx, tap, z80, rzx, scl, trd",abbr:"zxspectrum",core:"fuse_libretro_android.so"},{fullname:"Commodore - C64 (Frodo)",sysname:"C64",exts:"d64, t64, x64, p00, lnx, zip",abbr:"c64",core:"frodo_libretro_android.so"},{fullname:"Nintendo - Game Boy / Color (Emux GB)",sysname:"Game Boy/Game Boy Color",exts:"gb, bin, rom",abbr:"gb",core:"emux_gb_libretro_android.so"},{fullname:"Nintendo - SNES / SFC (bsnes)",sysname:"Super Nintendo Entertainment System",exts:"sfc, smc, gb, gbc",abbr:"snes",core:"bsnes_libretro_android.so"},{fullname:"Multi (MESS 2015)",sysname:"Multi (various)",exts:"zip, chd, 7z",abbr:"mame",core:"mess2015_libretro_android.so"},{fullname:"Nintendo - SNES / SFC (Beetle Supafaust)",sysname:"Super Nintendo Entertainment System",exts:"smc, fig, sfc, gd3, gd7, dx2, bsx, swc",abbr:"snes",core:"mednafen_supafaust_libretro_android.so"},{fullname:"Nintendo - SNES / SFC (Snes9x - Current)",sysname:"Super Nintendo Entertainment System",exts:"smc, sfc, swc, fig, bs, st",abbr:"snes",core:"snes9x_libretro_android.so"},{fullname:"Arcade (HBMAME)",sysname:"Arcade (various)",exts:"zip, chd, 7z, cmd",abbr:"hbmame",core:"hbmame_libretro_android.so"},{fullname:"Sega - MS/GG (SMS Plus GX)",sysname:"Sega 8-bit",exts:"sms, bin, rom, col, gg",abbr:"mastersystem",core:"smsplus_libretro_android.so"},{fullname:"Commodore - C128 (VICE x128)",sysname:"C128",exts:"d64, d71, d80, d81, d82, g64, g41, x64, t64, tap, prg, p00, crt, bin, zip, gz, d6z, d7z, d8z, g6z, g4z, x6z, cmd, m3u, vsf, nib, nbz",abbr:"commodore_128",core:"vice_x128_libretro_android.so"},{fullname:"Nintendo - 3DS (Citra)",sysname:"3DS",exts:"3ds, 3dsx, elf, axf, cci, cxi, app",abbr:"3ds",core:"citra_libretro_android.so"}],sa:[{fullname:"Atari 2600 (2600.emu)",sysname:"Atari 2600",exts:"bin, a26",abbr:"atari2600",core:"com.explusalpha.A2600Emu/com.imagine.BaseActivity"},{fullname:"Atari 2600 (Ataroid)",sysname:"Atari 2600",exts:"bin, a26",abbr:"atari2600",core:"com.androidemu.atari/.EmulatorActivity"},{fullname:"Commodore 64 (C64.emu)",sysname:"Commodore 64",exts:", d6z, vsf, nib, g6z, zip, cmd, d71, g64, x6z, m3u, g4z, t64, prg, crt, gz, nbz, bin, d64, p00, lnx, tap, d8z, g41, d81, d80, d82, x64, d7z",abbr:"c64",core:"com.explusalpha.C64Emu/com.imagine.BaseActivity"},{fullname:"GameCube (Dolphin)",sysname:"GameCube",exts:"wad, ciso, tgc, elf, iso, dff, gcz, gcm, wbfs, dol",abbr:"gc",core:"org.dolphinemu.dolphinemu/.activities.AppLinkActivity"},{fullname:"Nintendo DS (DraStic)",sysname:"Nintendo DS",exts:"bin, nds",abbr:"nds",core:"com.dsemu.drastic/.DraSticActivity"},{fullname:"Dreamcast (Flycast)",sysname:"Dreamcast",exts:"elf, iso, gdi, cdi, bin, cue, 7z, lst, zip, dat, chd, m3u",abbr:"dreamcast",core:"com.flycast.emulator/com.reicast.emulator.MainActivity"},{fullname:"Game Boy Advanced (GBA.emu)",sysname:"Game Boy Advanced",exts:"cgb, gb, bin, gbc, agb, sgb, gba, gbz, dmg",abbr:"gba",core:"com.explusalpha.GbaEmu/com.imagine.BaseActivity"},{fullname:"Game Boy Color (GBC.emu)",sysname:"Game Boy Color",exts:"cgb, gb, gbs, bin, gbc, rom, sgb, dmg",abbr:"gb",core:"com.explusalpha.GbcEmu/com.imagine.BaseActivity"},{fullname:"Game Boy Color (GBCoid)",sysname:"Game Boy Color",exts:"cgb, gb, gbs, bin, gbc, rom, sgb, dmg",abbr:"gb",core:"com.androidemu.gbc/.EmulatorActivity"},{fullname:"Game Gear (Gearoid)",sysname:"Game Gear",exts:"md, gg, 32x, sms, mdx, bin, iso, 68k, sg, cue, gen, smd, chd",abbr:"megadrive",core:"com.androidemu.gg/.EmulatorActivity"},{fullname:"Sega Genesis (Gensoid)",sysname:"Sega Genesis",exts:"md, gg, 32x, sms, mdx, bin, iso, 68k, sg, cue, gen, smd, chd",abbr:"megadrive",core:"com.androidemu.gens/.EmulatorActivity"},{fullname:"Mega Drive (MD.emu)",sysname:"Mega Drive",exts:"md, gg, 32x, sms, mdx, bin, iso, 68k, sg, cue, gen, smd, chd",abbr:"megadrive",core:"com.explusalpha.MdEmu/com.imagine.BaseActivity"},{fullname:"MSX (MSX.emu)",sysname:"MSX",exts:"col, cas, mx2, sc, m3u, rom, dsk, sg, mx1, ri",abbr:"msx",core:"com.explusalpha.MsxEmu/com.imagine.BaseActivity"},{fullname:"Nintendo 64 (Mupen64 Plus AE)",sysname:"Nintendo 64",exts:"bin, z64, v64, n64, u1, ndd",abbr:"n64",core:"paulscode.android.mupen64plusae/.MainActivity"},{fullname:"Nintendo 64 (Mupen64 Plus FZ)",sysname:"Nintendo 64",exts:"bin, z64, v64, n64, u1, ndd",abbr:"n64",core:"org.mupen64plusae.v3.fzurita/paulscode.android.mupen64plusae.SplashActivity"},{fullname:"Game Boy Color (My OldBoy!)",sysname:"Game Boy Color",exts:"cgb, gb, gbs, bin, gbc, rom, sgb, dmg",abbr:"gb",core:"com.fastemulator.gbc/.EmulatorActivity"},{fullname:"Game Boy Advanced (MyBoy!)",sysname:"Game Boy Advanced",exts:"cgb, gb, bin, gbc, agb, sgb, gba, gbz, dmg",abbr:"gba",core:"com.fastemulator.gba/.EmulatorActivity"},{fullname:"Neo Geo (Neo.emu)",sysname:"Neo Geo",exts:"iso, 7z, zip, cue",abbr:"fb_alpha",core:"com.explusalpha.NeoEmu/com.imagine.BaseActivity"},{fullname:"NES (NES.emu)",sysname:"NES",exts:"nsf, unif, nes, unf, fds, bin, rom, qd",abbr:"nes",core:"com.explusalpha.NesEmu/com.imagine.BaseActivity"},{fullname:"NES (NESoid)",sysname:"NES",exts:"nsf, unif, nes, unf, fds, bin, rom, qd",abbr:"nes",core:"com.androidemu.nes/.EmulatorActivity"},{fullname:"Neo Geo Pocket (NGP.emu)",sysname:"Neo Geo Pocket",exts:"ngc, ngpc, ngp, npc",abbr:"neo_geo_pocket",core:"com.explusalpha.NgpEmu/com.imagine.BaseActivity"},{fullname:"PC Engine SuperGrafx (PCE.emu)",sysname:"PC Engine SuperGrafx",exts:"sgx, iso, bin, cue, img, ccd, chd, pce",abbr:"pc_engine",core:"com.explusalpha.PceEmu/com.imagine.BaseActivity"},{fullname:"PlayStation Portable (PPSSPP)",sysname:"PlayStation Portable",exts:"cso, elf, iso, prx, pbp",abbr:"psp",core:"org.ppsspp.ppsspp/.PpssppActivity"},{fullname:"Dreamcast (Reicast)",sysname:"Dreamcast",exts:"elf, iso, gdi, cdi, bin, cue, 7z, lst, zip, dat, chd, m3u",abbr:"dreamcast",core:"com.reicast.emulator/.MainActivity"},{fullname:"SNES (Snes9xPlus)",sysname:"SNES",exts:"bml, gb, gd3, fig, bsx, gbc, gd7, sfc, rom, dx2, swc, smc, st, bs",abbr:"snes",core:"com.explusalpha.Snes9xPlus/com.imagine.BaseActivity"},{fullname:"SNES (SuperRetro16 Lite)",sysname:"SNES",exts:"bml, gb, gd3, fig, bsx, gbc, gd7, sfc, rom, dx2, swc, smc, st, bs",abbr:"snes",core:"com.bubblezapgames.supergnes_lite/com.bubblezapgames.supergnes.IntentFilterActivity"},{fullname:"SNES (SuperRetro16)",sysname:"SNES",exts:"bml, gb, gd3, fig, bsx, gbc, gd7, sfc, rom, dx2, swc, smc, st, bs",abbr:"snes",core:"com.bubblezapgames.supergnes/.IntentFilterActivity"},{fullname:"Saturn (Yaba Sanshiro)",sysname:"Saturn",exts:"mds, iso, bin, cue, zip, toc, ccd, chd, m3u",abbr:"saturn",core:"org.uoyabause.android/.Yabause"},{fullname:"Saturn (Yaba Sanshiro Pro)",sysname:"Saturn",exts:"mds, iso, bin, cue, zip, toc, ccd, chd, m3u",abbr:"saturn",core:"org.uoyabause.android.pro/org.uoyabause.android.Yabause"}]};function a(e,a){return e.fullname<a.fullname?-1:e.fullname>a.fullname?1:0}function n(){const e=[];return document.querySelectorAll("#ra-list li[data-checked=true]").forEach(a=>{const n=(s=a.dataset.sysname,o=a.dataset.abbr,r=a.dataset.exts,t=a.dataset.core,`collection: ${s}\nshortname: ${o}\nextensions: ${r}\nlaunch: am start --user 0\n  -n com.retroarch/.browser.retroactivity.RetroActivityFuture\n  -e ROM {file.path}\n  -e LIBRETRO /data/data/com.retroarch/cores/${t}\n  -e CONFIGFILE /storage/emulated/0/Android/data/com.retroarch/files/retroarch.cfg\n  -e IME com.android.inputmethod.latin/.LatinIME\n  -e DATADIR /data/data/com.retroarch\n  -e APK /data/app/com.retroarch-1/base.apk\n  -e SDCARD /storage/emulated/0\n  -e EXTERNAL /storage/emulated/0/Android/data/com.retroarch/files\n  --activity-clear-top\n`);var s,o,r,t;e.push([a.dataset.fullname,n])}),document.querySelectorAll("#sa-list li[data-checked=true]").forEach(a=>{const n=(s=a.dataset.sysname,o=a.dataset.abbr,r=a.dataset.exts,t=a.dataset.core,`collection: ${s}\nshortname: ${o}\nextensions: ${r}\nlaunch: am start --user 0\n  -a android.intent.action.VIEW\n  -n ${t}\n  -d "file://{file.path}"\n`);var s,o,r,t;e.push([a.dataset.fullname,n])}),e}function s(e,a){const n=document.createElement("a");n.setAttribute("href",a),n.setAttribute("download",e),n.style.display="none",document.body.appendChild(n),n.click(),document.body.removeChild(n)}function o(){const e=document.getElementById("target");s("metadata.pegasus.txt","data:text/plain;charset=utf-8,"+encodeURIComponent(e.value))}async function r(){const e=n(),a=new JSZip;e.forEach(e=>{const[n,s]=e;a.folder(n).file("metadata.pegasus.txt",s)});s("pegasus_collections.zip","data:application/zip;base64,"+await a.generateAsync({type:"base64"}))}function t(e,a){const s=document.createElement("input");s.setAttribute("type","checkbox");const o=document.createElement("span");o.innerText=a.fullname;const r=document.createElement("li");r.dataset.fullname=a.fullname,r.dataset.sysname=a.sysname,r.dataset.exts=a.exts,r.dataset.abbr=a.abbr,r.dataset.core=a.core,r.appendChild(s),r.appendChild(o),r.dataset.checked=s.checked,r.onclick=function(){s.checked=!s.checked,r.dataset.checked=s.checked,function(){const e=document.getElementById("target"),a=n();e.value=a.map(e=>e[1]+"\n\n").join("")}()},e.appendChild(r)}window.onload=async()=>{function n(n,s){const o=document.getElementById(s),r=new DocumentFragment;e[n].sort(a).forEach(e=>t(r,e)),o.appendChild(r)}n("ra","ra-list"),n("sa","sa-list"),document.getElementById("dl-single").onclick=o,document.getElementById("dl-multi").onclick=r}}();
