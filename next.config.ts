import path from "path";
import type { NextConfig } from "next";

/*
const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});
*/

const nextConfig: NextConfig = {
    poweredByHeader: false,
    output: "export",
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "ruciloss.github.io",
                pathname: "/**",
            },
        ],
    },
    /*
    i18n: {
        locales: ['en', 'cs'],
        defaultLocale: 'en',
    },
    */

    transpilePackages: ["@stylexjs/open-props"],
    eslint: { ignoreDuringBuilds: true },

    webpack: (config, { dev }) => {
        config.module.rules.push({
            test: /\.(js|jsx|ts|tsx)$/,
            exclude: /node_modules(?!\/@stylexjs\/open-props)/,
            use: [
                {
                    loader: "babel-loader",
                    options: {
                        parserOpts: {
                            plugins: ["typescript", "jsx"],
                        },
                        plugins: [
                            [
                                "@stylexjs/babel-plugin",
                                {
                                    dev: dev,
                                    runtimeInjection: false,
                                    treeshakeCompensation: true,
                                    aliases: {
                                        "@/*": [path.join(__dirname, "*")],
                                    },
                                    unstable_moduleResolution: {
                                        type: "commonJS",
                                    },
                                },
                            ],
                        ],
                    },
                },
            ],
        });

        return config;
    },
};

export default nextConfig;
// module.exports = withBundleAnalyzer(nextConfig);
