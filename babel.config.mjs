import { fileURLToPath } from "url";
import { join } from "path";

const dirname = fileURLToPath(new URL(".", import.meta.url));

export default function (api) {
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
                    "@/*": [join(dirname, "*")],
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
