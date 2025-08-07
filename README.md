# This is a fork of @zisismaras [Ender 3 4.2.2 board build](https://github.com/zisismaras/ender_3_4.2.2_firmware/tree/master)

# Ender-3 4.2.2 firmware

Automatic [Marlin](https://github.com/MarlinFirmware/Marlin) builds for the Ender-3 with the stock creality 4.2.2(512K) board.  
You can find both stable and nightly (`bugfix-2.1.x`) downloads on the repository releases.  

**Important**
* Make sure you have a 4.2.2 512K flash board before installing. Some newer models come with 256K of flash. You can read more [here](https://github.com/MarlinFirmware/Marlin/issues/23596). If your board is the 256K variant you can fork the repo and change the `board_env`.
* All builds here use the default `A4988` stepper drivers, you can fork and change that if you have different ones. To find out which drivers you have there is a little marking on the sd card slot. More info [here](https://github.com/MarlinFirmware/Configurations/pull/633#issuecomment-995206382).
* It's been a while since i used this board. The latest tested version is `2.1.3 b3`.

## Builds

### default

The default Marlin configuration for Ender-3.

### base

Bed leveling helper menu to move around the corners. Better than having a gcode file or moving manually.  
Also enables `HOST_ACTION_COMMANDS` as required by octoprint.

### base_lin

base + [linear advance](https://marlinfw.org/docs/features/lin_advance.html).     
Linear advance `K factor` is set to `0` for default disabled. You can read the marlin docs on how to find and set a good value in your slicer or set as default on menu. There are also numerous videos on youtube.  

### manual_mesh

[Manual mesh leveling](https://marlinfw.org/docs/gcode/G029-mbl.html)  

### auto_level with filament detection enabled

[automatic leveling](https://marlinfw.org/docs/gcode/G029-abl-bilinear.html)  
**Note**: Only tested with a CR-touch but a BL-touch should work as well. Not sure about the 3D-touch clones, do some research before flashing. If you have a different type of probe you will need a different configuration.  I enabled filament detect feature, mine has switch inverted, then I configured like this on build settings.

### auto_level with filament detection enabled and Input Shape function

Same as above but with input shaping enabled and menu option.
[Input Shaping](https://marlinfw.org/docs/features/input_shaping.html)


The grid is configured to be symmetrical with 15mm margin on left and right and 15mm on front and back.  
Probe offsets are set to `-50, -10 and -0.900`. There are a lot of videos on how to measure and set them.  
The build enables the offset wizard to simplify the Z-offset measurement.  

**Important**: The build assumes you are using the dedicated BL-touch port on the board and you have the Z-stop disconnected. It will not work if you are using the Z-stop port for the probe.  

The [M48 accuracy test](https://marlinfw.org/docs/gcode/M048.html) is also enabled in case you want to test your probe.

## Build you own firmware

Check out [Marlin auto build](https://github.com/zisismaras/marlin_auto_build) if you want to build your own firmware automatically on github.
