import * as stylex from "@stylexjs/stylex";
import { colors, fonts, text } from "./globalTokens.stylex";

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
        fontFamily: fonts.sans,
        fontSize: text.sm,
        fontWeight: 400,
        lineHeight: 1.5,
        color: `rgba(${colors.foregroundR}, ${colors.foregroundG}, ${colors.foregroundB}, 1)`,
        backgroundImage: `linear-gradient(to bottom, rgb(${colors.bgStartR}, ${colors.bgStartG}, ${colors.bgStartB}), rgb(${colors.bgEndR}, ${colors.bgEndG}, ${colors.bgEndB}))`,
    },
});
