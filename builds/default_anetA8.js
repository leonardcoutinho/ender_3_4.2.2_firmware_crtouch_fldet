module.exports = {
    min_version: "2.1.2",
    meta: {
        stable_name: "anet_A8_-{{marlin_version}}-default-{{uid}}",
        nightly_name: "anet_A8_-{{current_date}}-default-{{uid}}"
    },
    based_on: {
        repo: "https://github.com/MarlinFirmware/Configurations/",
        path: "/config/examples/Anet/A8/",
        stable_branch: "release-{{marlin_version}}",
        nightly_branch: "bugfix-2.1.x"
    }
};
