import * as stylex from "@stylexjs/stylex";
import { spacing, text } from "../../app/globalTokens.stylex";

export const styles = stylex.create({
    wrapper: {
        alignItems: "center",
        display: "flex",
        fontSize: text.xs,
        gap: spacing.xxxs,
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
