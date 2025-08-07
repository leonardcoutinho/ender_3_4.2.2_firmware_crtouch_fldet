 module.exports = {
    extends: "builds/default_anetA8.js",
    meta: {
        stable_name: "anet_A8_4.2.2-{{marlin_version}}-base-{{uid}}",
        nightly_name: "anet_A8_4.2.2-{{current_date}}-base-{{uid}}"
    },
    configuration: {
        enable: [
            ["STRING_CONFIG_H_AUTHOR", "(Dust, valerionew, Anet A8, leonardcoutinho)"],
            //standard leveling menu helper
            "LCD_BED_TRAMMING",
            "BED_TRAMMING_INCLUDE_CENTER"
        ]
    },
    configuration_adv: {
        enable: [
            //octoprint
            "HOST_ACTION_COMMANDS"
        ]
    }
};
