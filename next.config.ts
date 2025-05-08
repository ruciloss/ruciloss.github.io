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
    },
    /*
    i18n: {
        locales: ['en', 'cs'],
        defaultLocale: 'en',
    },
    */
    transpilePackages: ["@stylexjs/open-props"],
};

export default nextConfig;
// module.exports = withBundleAnalyzer(nextConfig);
