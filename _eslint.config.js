// eslint.config.js
import { defineConfig } from "eslint/config";

export default defineConfig([
    {
        extends: ["next/core-web-vitals", "next/typescript"],
        plugins: ["@stylexjs", "@next/next/recommended"],
        rules: {
            "@stylexjs/valid-styles": "error",
        },
    },
]);
