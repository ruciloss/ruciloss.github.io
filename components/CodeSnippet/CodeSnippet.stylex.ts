import * as stylex from "@stylexjs/stylex";
import { colors, fonts, spacing, text } from "../../app/globalTokens.stylex";

export const styles = stylex.create({
    wrapper: {
        borderRadius: "9px",
        fontFamily: "monospace",
        borderStyle: "dotted",
        borderWidth: "1px",
        borderColor: `rgba(${colors.borderR}, ${colors.borderG}, ${colors.borderB}, 1)`,
        fontSize: text.xs,
    },
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: `${spacing.xxs} ${spacing.xs}`,
        borderTopLeftRadius: "9px",
        borderTopRightRadius: "9px",
        color: `rgba(${colors.blackWhiteR}, ${colors.blackWhiteG}, ${colors.blackWhiteB}, 1)`,
    },
    actions: {
        display: "flex",
        alignItems: "center",
        gap: spacing.xxs,
    },
    code: {
        padding: `${spacing.xs} ${spacing.sm}`,
        fontFamily: fonts.mono,
    },
    icon: {
        fill: "currentColor",
    },
    button: {
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: spacing.xxs,
        backgroundColor: "transparent",
        borderWidth: 0,
        textDecoration: "none",
        fontSize: text.xs,
        color: `rgba(${colors.blackWhiteR}, ${colors.blackWhiteG}, ${colors.blackWhiteB}, 1)`,
    },
});
