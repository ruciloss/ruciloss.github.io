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
        boxShadow: `0 1px 2px rgba(${colors.shadowR}, ${colors.shadowG}, ${colors.shadowB}, .2)`,
        borderBottomStyle: "solid",
        borderBottomWidth: "1px",
        borderBottomColor: `rgba(${colors.borderR}, ${colors.borderG}, ${colors.borderB}, 1)`,
        backgroundColor: `rgba(${colors.bgSecondaryR}, ${colors.bgSecondaryG}, ${colors.bgSecondaryB}, 1)`,
        padding: `${spacing.xxs} ${spacing.xs}`,
    },
    wrapperInner: {
        display: "flex",
        alignItems: "center",
        gap: spacing.sm,
        textTransform: "capitalize",
    },
    logo: {
        color: "inherit",
        display: "flex",
    },
});
