import * as stylex from "@stylexjs/stylex";
import { spacing } from "../../../app/globalTokens.stylex";

export const styles = stylex.create({
    wrapper: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        textAlign: "center",
        gap: spacing.lg,
        padding: `0 ${spacing.xs}`,
        maxWidth: "500px",
        margin: "auto",
    },
});
