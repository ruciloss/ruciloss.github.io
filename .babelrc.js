const path = require("path");

module.exports = {
    presets: ["next/babel"],
    plugins: [
        [
            "@stylexjs/babel-plugin",
            {
                dev: process.env.NODE_ENV === "development",
                test: process.env.NODE_ENV === "test",
                runtimeInjection: false,
                treeshakeCompensation: true,
                //classNamePrefix: "r",
                aliases: {
                    "@/*": [path.join(__dirname, "*")],
                },
                unstable_moduleResolution: {
                    type: "commonJS",
                },
            },
        ],
    ],
};
