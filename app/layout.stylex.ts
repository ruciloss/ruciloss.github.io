import * as stylex from "@stylexjs/stylex";
import { colors, text } from "./globalTokens.stylex";

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
        color: `rgba(${colors.foregroundR}, ${colors.foregroundG}, ${colors.foregroundB}, 1)`,
        backgroundImage: `linear-gradient(to bottom, rgb(${colors.foregroundR}, ${colors.foregroundG}, ${colors.foregroundB}), ${colors.foregroundB})`,
    },
});
