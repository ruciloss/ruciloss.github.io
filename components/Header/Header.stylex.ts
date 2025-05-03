import * as stylex from "@stylexjs/stylex";
import { spacing } from "../../app/globalTokens.stylex";

const DARK = "@media (prefers-color-scheme: dark)";

export const styles = stylex.create({
    wrapper: {
        display: "flex",
        alignItems: "center",
        gap: spacing.md,
        flexDirection: {
            default: "column",
            "@media (min-width: 768px)": "row",
        },
        justifyContent: {
            default: "start",
            "@media (min-width: 768px)": "center",
        },
    },
    inverseImage: {
        filter: {
            default:
                "invert(0%) sepia(3%) saturate(0%) hue-rotate(213deg) brightness(95%) contrast(103%)",
            [DARK]: "invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%)",
        },
    },
});
