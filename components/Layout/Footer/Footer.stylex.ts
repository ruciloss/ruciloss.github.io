import * as stylex from "@stylexjs/stylex";
import { colors, spacing, text } from "../../../app/globalTokens.stylex";

export const styles = stylex.create({
    wrapper: {
        alignItems: "center",
        borderTopColor: `rgba(${colors.borderR}, ${colors.borderG}, ${colors.borderB}, 1)`,
        borderTopStyle: "solid",
        borderTopWidth: "1px",
        display: "flex",
        fontSize: text.xs,
        gap: spacing.sm,
        justifyContent: "space-between",
        marginTop: spacing.xxl,
        paddingTop: spacing.sm,
        width: "100%",
    },
    item: {
        alignItems: "center",
        display: "flex",
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
