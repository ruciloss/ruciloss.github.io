import * as stylex from "@stylexjs/stylex";
import { colors, text } from "../../app/globalTokens.stylex";

export const styles = stylex.create({
    heading: {
        color: `rgba(${colors.blackWhiteR}, ${colors.blackWhiteG}, ${colors.blackWhiteB}, 1)`,
        fontSize: text.h2,
        fontWeight: 700,
    },
    link: {
        color: `rgba(${colors.primaryR}, ${colors.primaryG}, ${colors.primaryB}, 1)`,
        fontWeight: 600,
        textDecoration: {
            default: "underline",
            ":hover": "none",
        },
    },
});
