import * as stylex from "@stylexjs/stylex";
import { spacing } from "../../app/globalTokens.stylex";

export const styles = stylex.create({
    wrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: spacing.xxs,
        margin: `${spacing.sm} 0`,
    },
});
