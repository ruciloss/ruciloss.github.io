import * as stylex from "@stylexjs/stylex";
import { spacing } from "../../app/globalTokens.stylex";

export const styles = stylex.create({
    wrapper: {
        display: "flex",
        alignItems: "center",
        gap: spacing.md,
        flexDirection: {
            default: "column",
            "@media (min-width: 768px)": "row",
        },
        justifyContent: {
            default: "start",
            "@media (min-width: 768px)": "center",
        },
    },
});
