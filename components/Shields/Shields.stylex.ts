import * as stylex from "@stylexjs/stylex";
import { spacing } from "../../app/globalTokens.stylex";

export const styles = stylex.create({
    wrapper: {
        alignItems: "center",
        display: "flex",
        gap: spacing.xxs,
        justifyContent: "center",
        margin: `${spacing.sm} 0`,
    },
});
