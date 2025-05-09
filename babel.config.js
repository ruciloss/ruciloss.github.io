const path = require("path");

module.exports = function (api) {
    api.cache(true);

    const presets = ["next/babel"];
    const plugins = [
        [
            "@stylexjs/babel-plugin",
            {
                dev: process.env.NODE_ENV === "development",
                test: process.env.NODE_ENV === "test",
                runtimeInjection: false,
                treeshakeCompensation: true,
                // classNamePrefix: "y",
                aliases: {
                    "@/*": [path.join(__dirname, "*")],
                },
                unstable_moduleResolution: {
                    type: "commonJS",
                },
            },
        ],
    ];

    return {
        presets,
        plugins,
    };
};
