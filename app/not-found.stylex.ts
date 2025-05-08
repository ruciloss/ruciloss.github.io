import * as stylex from "@stylexjs/stylex";
import { colors, spacing, text } from "./globalTokens.stylex";

export const styles = stylex.create({
    heading: {
        alignItems: "center",
        color: `rgba(${colors.blackWhiteR}, ${colors.blackWhiteG}, ${colors.blackWhiteB}, 1)`,
        display: "flex",
        fontSize: text.p,
        fontWeight: 700,
        gap: spacing.xs,
        height: "50px",
        textAlign: "center",
    },
    divider: {
        backgroundColor: `rgba(${colors.borderR}, ${colors.borderG}, ${colors.borderB}, 1)`,
        height: "100%",
        width: "1px",
    },
    paragraph: {
        marginTop: spacing.lg,
    },
    countdown: {
        color: `rgba(${colors.dangerR}, ${colors.dangerG}, ${colors.dangerB}, 1)`,
        fontWeight: 600,
    },
});
