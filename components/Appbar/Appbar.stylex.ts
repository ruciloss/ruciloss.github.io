import * as stylex from "@stylexjs/stylex";
import { colors, spacing } from "../../app/globalTokens.stylex";

export const styles = stylex.create({
    wrapper: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "fixed",
        left: 0,
        top: 0,
        width: "100%",
        margin: "auto",
        borderBottomStyle: "solid",
        borderBottomWidth: "1px",
        borderBottomColor: `rgba(${colors.borderR}, ${colors.borderG}, ${colors.borderB}, 1)`,
        backgroundColor: `rgba(${colors.bgSecondaryR}, ${colors.bgSecondaryG}, ${colors.bgSecondaryB}, 1)`,
        padding: `${spacing.xxs} ${spacing.xs}`,
    },
});
