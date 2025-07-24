module.exports = {
    partial: true,
    configuration_adv: {
        enable: [
            "LIN_ADVANCE",
            ["ADVANCE_K", 0.22]
            //"S_CURVE_ACCELERATION" was default enabled for Ender 3 4.2.2,
            //"ALLOW_LOW_EJERK"
        ]
    }
};
