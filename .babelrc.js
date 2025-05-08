const path = require("path");

module.exports = {
    presets: [
        "next/babel", // Zajišťuje přednastavené konfigurace pro Next.js
    ],
    plugins: [
        [
            "@stylexjs/babel-plugin",
            {
                dev: process.env.NODE_ENV === "development", // Zajišťuje, že dev bude true v development režimu
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
