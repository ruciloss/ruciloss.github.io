import * as stylex from "@stylexjs/stylex";
import { colors, spacing } from "../../app/globalTokens.stylex";

export const styles = stylex.create({
    wrapper: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "fixed",
        zIndex: 9999,
        left: 0,
        top: 0,
        width: "100%",
        margin: "auto",
        boxShadow: `0 1px 2px rgba(${colors.shadowR}, ${colors.shadowG}, ${colors.shadowB}, .1)`,
        backgroundColor: `rgba(${colors.bgSecondaryR}, ${colors.bgSecondaryG}, ${colors.bgSecondaryB}, .75)`,
        backdropFilter: "blur(6px)",
        padding: `${spacing.xxs} ${spacing.xs}`,
        color: `rgba(${colors.blackWhiteR}, ${colors.blackWhiteG}, ${colors.blackWhiteG}, 1)`,
    },
    wrapperInner: {
        display: "flex",
        alignItems: "center",
        gap: spacing.sm,
    },
    logo: {
        color: "inherit",
        display: "flex",
    },
});
