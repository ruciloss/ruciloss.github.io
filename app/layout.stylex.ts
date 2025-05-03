import * as stylex from "@stylexjs/stylex";
import { globalTokens as $, text } from "./globalTokens.stylex";

const DARK = "@media (prefers-color-scheme: dark)";

export const styles = stylex.create({
    html: {
        colorScheme: "light dark",
    },
    reset: {
        minHeight: "100%",
        margin: 0,
        padding: 0,
    },
    body: {
        minHeight: "100%",
        fontSize: text.sm,
        fontWeight: 400,
        lineHeight: 1.5,
        color: {
            default: `rgba(${$.foregroundR}, ${$.foregroundG}, ${$.foregroundB}, 1)`,
            [DARK]: "#d4d4d8",
        },
        backgroundImage: {
            default: "linear-gradient(to bottom, rgb(214, 219, 220), #fff)",
            [DARK]: "linear-gradient(to bottom, rgb(20, 22, 27), #000)",
        },
    },
});
