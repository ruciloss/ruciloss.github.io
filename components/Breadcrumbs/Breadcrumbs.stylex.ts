import * as stylex from "@stylexjs/stylex";
import { spacing } from "../../app/globalTokens.stylex";

export const styles = stylex.create({
    wrapper: {
        display: "flex",
        alignItems: "center",
        gap: spacing.xxs,
    },
    breadcrumb: {
        display: "inline-flex",
        alignItems: "center",
        fontSize: "14px",
        color: "#0070f3", // Make it look like a link (adjust color as needed)
        cursor: "pointer",
    },
});
