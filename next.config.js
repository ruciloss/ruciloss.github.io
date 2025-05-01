// @type {import('next').NextConfig}
const path = require("path");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
    // Static export
    output: "export",

    /*
    i18n: {
        locales: ['en', 'cs'],
        defaultLocale: 'en',
    },
    */

    // Images
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**.mycdn.com",
                pathname: "/images/**",
            },
        ],
    },

    // Hide "X-Powered-By: Next.js" header
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

// Wrapping Next.js config with the bundle analyzer
module.exports = withBundleAnalyzer(nextConfig);
