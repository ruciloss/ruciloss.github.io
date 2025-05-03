import * as stylex from "@stylexjs/stylex";
import { text, spacing } from "../../app/globalTokens.stylex";

const DARK = "@media (prefers-color-scheme: dark)";

export const styles = stylex.create({
    footer: {
        fontSize: text.xs,
        display: "flex",
        flexDirection: {
            default: "column",
            "@media (min-width: 768px)": "row",
        },
        alignItems: "center",
        justifyContent: {
            default: "start",
            "@media (min-width: 768px)": "center",
        },
        gap: spacing.sm,
        marginTop: spacing.xxl,
        color: {
            default: "#52525b",
            [DARK]: "#a1a1aa",
        },
    },
    footerItem: {
        display: "flex",
        alignItems: "center",
        gap: spacing.xxs,
    },
    link: {
        color: "#00aaff",
        fontWeight: 600,
        textDecoration: {
            default: "none",
            ":hover": "underline",
        },
    },
});
