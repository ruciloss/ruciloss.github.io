import { join } from "path";

export const presets = ["next/babel"];
export const plugins = [
    [
        "@stylexjs/babel-plugin",
        {
            dev: process.env.NODE_ENV === "development",
            test: process.env.NODE_ENV === "test",
            runtimeInjection: false,
            treeshakeCompensation: true,
            classNamePrefix: "r",
            aliases: {
                "@/*": [join(__dirname, "*")],
            },
            unstable_moduleResolution: {
                type: "commonJS",
            },
        },
    ],
];
