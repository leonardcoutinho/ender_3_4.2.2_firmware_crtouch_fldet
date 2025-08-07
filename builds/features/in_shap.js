module.exports = {
    partial: true,
    configuration: {
        enable: [
            "FILAMENT_RUNOUT_SENSOR",
            ["FIL_RUNOUT_STATE", q`HIGH`]
        ]
    },
    configuration_adv: {
        enable: [
            "ADVANCED_PAUSE_FEATURE"
        ]
    }
};
