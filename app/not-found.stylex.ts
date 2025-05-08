import * as stylex from "@stylexjs/stylex";
import { colors, spacing, text } from "./globalTokens.stylex";

export const styles = stylex.create({
    heading: {
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        gap: spacing.xs,
        height: "50px",
        fontWeight: 700,
        fontSize: text.p,
        color: `rgba(${colors.blackWhiteR}, ${colors.blackWhiteG}, ${colors.blackWhiteB}, 1)`,
    },
    divider: {
        height: "100%",
        width: "1px",
        backgroundColor: `rgba(${colors.borderR}, ${colors.borderG}, ${colors.borderB}, 1)`,
    },
    paragraph: {
        marginTop: spacing.lg,
    },
    countdown: {
        color: `rgba(${colors.dangerR}, ${colors.dangerG}, ${colors.dangerB}, 1)`,
        fontWeight: 600,
    },
});
