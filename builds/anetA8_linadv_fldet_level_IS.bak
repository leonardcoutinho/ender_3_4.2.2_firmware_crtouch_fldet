 module.exports = {
    extends: "builds/default_anetA8.js",
    meta: {
        stable_name: "anet_A8_-{{marlin_version}}-base-{{uid}}",
        nightly_name: "anet_A8_-{{current_date}}-base-{{uid}}"
    },
    configuration: {
        enable: [
            ["STRING_CONFIG_H_AUTHOR", "(Dust, valerionew, Anet A8, leonardcoutinho)"],
            //standard leveling menu helper
            "LCD_BED_TRAMMING",
            "BED_TRAMMING_INCLUDE_CENTER",
            ["GRID_MAX_POINTS_X", 5],
            "PIDTEMPBED",
            "NOZZLE_PARK_FEATURE",
            "BLTOUCH",
            "AUTO_BED_LEVELING_BILINEAR",
            "Z_SAFE_HOMING",
            "USE_PROBE_FOR_Z_HOMING",
            ["Z_MIN_PROBE_PIN", q`PB1`],
            "LCD_BED_LEVELING",

            ["DEFAULT_LEVELING_FADE_HEIGHT", 20],
            ["NOZZLE_TO_PROBE_OFFSET", [0, 0, 0]],

            //M48 test
            "Z_MIN_PROBE_REPEATABILITY_TEST",
            "FILAMENT_RUNOUT_SENSOR",
            ["FIL_RUNOUT_STATE", q`HIGH`]
         
        ],
        disable: [
            "Z_MIN_PROBE_USES_Z_MIN_ENDSTOP_PIN"
        ]
    },
    configuration_adv: {
        enable: [
            "LIN_ADVANCE",
            ["ADVANCE_K", 0],
            //octoprint
            "HOST_ACTION_COMMANDS",
            "BABYSTEPPING",
            "BABYSTEP_ZPROBE_OFFSET",
            "PROBE_OFFSET_WIZARD",
            "ADVANCED_PAUSE_FEATURE",
            //symmetrical
            ["PROBING_MARGIN_LEFT", 15],
            ["PROBING_MARGIN_RIGHT", 15],
            ["PROBING_MARGIN_FRONT", 15],
            ["PROBING_MARGIN_BACK", 15],
            "INPUT_SHAPING_X",
            "INPUT_SHAPING_Y",
            "SHAPING_MENU"
        ]
    }
};
