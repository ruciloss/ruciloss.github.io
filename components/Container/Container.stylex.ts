import * as stylex from "@stylexjs/stylex";
import { global, spacing } from "../../app/globalTokens.stylex";

export const styles = stylex.create({
    wrapper: {
        minHeight: `calc(100vh - ${global.headerHeight})`,
        position: "relative",
        top: global.headerHeight,
        maxWidth: "1320px",
        margin: "auto",
        padding: `0 ${spacing.xs}`,
    },
});
