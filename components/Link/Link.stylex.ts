import * as stylex from "@stylexjs/stylex";
import { colors } from "../../app/globalTokens.stylex";

export const styles = stylex.create({
    link: {
        color: `rgba(${colors.primaryR}, ${colors.primaryG}, ${colors.primaryB}, 1)`,
        fontWeight: 600,
        textDecoration: {
            default: "none",
            ":hover": "underline",
        },
    },
});
