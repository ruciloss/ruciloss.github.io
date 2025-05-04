import * as stylex from "@stylexjs/stylex";
import { colors, spacing, text } from "../../app/globalTokens.stylex";

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
        display: "flex",
        color: `rgba(${colors.textMutedR}, ${colors.textMutedG}, ${colors.textMutedB}, 1)`,
        textDecoration: {
            default: "none",
            ":hover": "underline",
        },
    },
});
