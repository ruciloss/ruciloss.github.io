import * as stylex from "@stylexjs/stylex";
import { colors, spacing, text } from "../../app/globalTokens.stylex";

const DARK = "@media (prefers-color-scheme: dark)";

export const styles = stylex.create({
    wrapper: {
        fontSize: text.xs,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: spacing.sm,
        marginTop: spacing.xxl,
        color: `rgba(${colors.textMutedR}, ${colors.textMutedG}, ${colors.textMutedB}, 1)`,
        width: "100%",
        padding: spacing.sm,
    },
    item: {
        display: "flex",
        alignItems: "center",
        gap: spacing.xxs,
    },
    link: {
        color: `rgba(${colors.textMutedR}, ${colors.textMutedG}, ${colors.textMutedB}, 1)`,
        textDecoration: {
            default: "none",
            ":hover": "underline",
        },
    },
    inverseImage: {
        filter: {
            default:
                "invert(0%) sepia(3%) saturate(0%) hue-rotate(213deg) brightness(95%) contrast(103%)",
            [DARK]: "invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%)",
        },
    },
});
