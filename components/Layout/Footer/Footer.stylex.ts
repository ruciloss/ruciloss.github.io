import * as stylex from "@stylexjs/stylex";
import { colors, spacing, text } from "../../../app/globalTokens.stylex";

export const styles = stylex.create({
    wrapper: {
        fontSize: text.xs,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: spacing.sm,
        marginTop: spacing.xxl,
        width: "100%",
        paddingTop: spacing.sm,
        borderTopStyle: "solid",
        borderTopWidth: "1px",
        borderTopColor: `rgba(${colors.borderR}, ${colors.borderG}, ${colors.borderB}, 1)`,
    },
    item: {
        display: "flex",
        alignItems: "center",
        gap: spacing.xxs,
    },
    link: {
        color: "inherit",
        display: "flex",
        textDecoration: {
            default: "none",
            ":hover": "underline",
        },
    },
});
