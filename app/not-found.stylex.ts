import * as stylex from "@stylexjs/stylex";
import { colors, spacing, text } from "./globalTokens.stylex";

export const styles = stylex.create({
    wrapper: {
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        height: "100vh",
        gap: spacing.xs,
        color: `rgba(${colors.blackWhiteR}, ${colors.blackWhiteG}, ${colors.blackWhiteB}, 1)`,
    },
    error: {
        fontSize: text.p,
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
