import * as stylex from "@stylexjs/stylex";
import { spacing } from "../../app/globalTokens.stylex";

export const styles = stylex.create({
    wrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        height: "100vh",
        maxWidth: "600px",
        margin: "auto",
        padding: `${spacing.lg} ${spacing.sm}`,
    },
});
