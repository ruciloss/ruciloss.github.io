import * as stylex from "@stylexjs/stylex";
import { spacing } from "../../app/globalTokens.stylex";

export const styles = stylex.create({
    badges: {
        display: "flex",
        alignItems: "center",
        gap: spacing.xxs,
    },
});
