import * as stylex from "@stylexjs/stylex";
import { colors, spacing, text } from "../../app/globalTokens.stylex";

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
        color: `rgba(${colors.textMutedR}, ${colors.textMutedG}, ${colors.textMutedB}, 1)`,
    },
    footerItem: {
        display: "flex",
        alignItems: "center",
        gap: spacing.xxs,
    },
});
