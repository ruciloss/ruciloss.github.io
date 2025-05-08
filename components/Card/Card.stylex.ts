import * as stylex from "@stylexjs/stylex";
import { spacing } from "../../app/globalTokens.stylex";

export const styles = stylex.create({
    card: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        textAlign: "center",
        gap: spacing.lg,
        padding: `0 ${spacing.xs}`,
        maxWidth: "600px",
        margin: "auto",
    },
});
