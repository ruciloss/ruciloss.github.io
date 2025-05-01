// @type {import('next').NextConfig}
const path = require("path");

const nextConfig = {
    // Static export
    output: "export",

    // Images
    images: {
        // Static export
        unoptimized: true,

        // Rules
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**.mycdn.com",
                pathname: "/images/**",
            },
        ],
    },

    /*
    i18n: {
        locales: ['en', 'cs'],
        defaultLocale: 'en',
    },
    */

    // Hides the "X-Powered-By: Next.js" header
    poweredByHeader: false,

    // StyleX
    transpilePackages: ["@stylexjs/open-props"],
    eslint: { ignoreDuringBuilds: true },

    webpack: (config, { dev, isServer }) => {
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

module.exports = nextConfig;
