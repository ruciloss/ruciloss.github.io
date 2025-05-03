import path from "path";
import { fileURLToPath } from "url";
import withBundleAnalyzerInit from "@next/bundle-analyzer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const useStaticMode = true;

let nextConfig = {
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

if (useStaticMode === false) {
    const withBundleAnalyzer = withBundleAnalyzerInit({
        enabled: process.env.ANALYZE === "true",
    });

    nextConfig = withBundleAnalyzer(nextConfig);
}

export default nextConfig;
