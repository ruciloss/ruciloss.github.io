import * as stylex from "@stylexjs/stylex";
import { colors } from "../../app/globalTokens.stylex";

export const styles = stylex.create({
    wrapper: {
        color: `rgba(${colors.foregroundR}, ${colors.foregroundG}, ${colors.foregroundB}, 1)`,
        backgroundImage: `linear-gradient(to bottom, rgb(${colors.bgStartR}, ${colors.bgStartG}, ${colors.bgStartB}), rgb(${colors.bgEndR}, ${colors.bgEndG}, ${colors.bgEndB}))`,
    },
});
