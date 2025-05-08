import * as stylex from "@stylexjs/stylex";
import {
    colors,
    fonts,
    radius,
    spacing,
    text,
} from "../../app/globalTokens.stylex";

export const styles = stylex.create({
    wrapper: {
        borderRadius: radius.sm,
        fontFamily: "monospace",
        boxShadow: `0 1px 2px rgba(${colors.shadowR}, ${colors.shadowG}, ${colors.shadowB}, .1)`,
        fontSize: text.xs,
        width: {
            default: "100%",
            "@media (min-width: 768px)": "max-content",
        },
        backgroundColor: `rgba(${colors.bgSecondaryR}, ${colors.bgSecondaryG}, ${colors.bgSecondaryB}, 1)`,
    },
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: `${spacing.xxs} ${spacing.xs}`,
        borderBottomStyle: "solid",
        borderBottomWidth: "1px",
        borderBottomColor: `rgba(${colors.borderR}, ${colors.borderG}, ${colors.borderB}, 1)`,
    },
    actions: {
        display: "flex",
        alignItems: "center",
        gap: spacing.xxs,
    },
    code: {
        padding: `${spacing.xs} ${spacing.sm}`,
        fontFamily: fonts.mono,
        display: "block",
        overflowX: "auto",
        color: `rgba(${colors.blackWhiteR}, ${colors.blackWhiteG}, ${colors.blackWhiteB}, 1)`,
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
        color: "inherit",
    },
});
