import * as stylex from "@stylexjs/stylex";
import { spacing, text } from "../../app/globalTokens.stylex";

export const styles = stylex.create({
    wrapper: {
        display: "flex",
        alignItems: "center",
        gap: spacing.xxxs,
        fontSize: text.xs,
        textTransform: "capitalize",
    },
    link: {
        color: "inherit",
        textDecoration: {
            default: "none",
            ":hover": "underline",
        },
    },
});
