import * as stylex from "@stylexjs/stylex";
import { global } from "../../../app/globalTokens.stylex";

export const styles = stylex.create({
    wrapper: {
        minHeight: `calc(100vh - ${global.headerHeight})`,
        position: "relative",
        top: global.headerHeight,
        display: "flex",
    },
});
