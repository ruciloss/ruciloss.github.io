import * as stylex from "@stylexjs/stylex";
import { colors, fonts, text } from "../../app/globalTokens.stylex";

const DARK = "@media (prefers-color-scheme: dark)";

export const styles = stylex.create({
    codeBlock: {
        borderRadius: "9px",
        fontFamily: "monospace",
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: "#27272a",
        width: "100%",
    },
    codeHeader: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: {
            default: "#e5e7eb",
            [DARK]: "#18181b",
        },
        padding: "10px 12px",
        borderTopLeftRadius: "9px",
        borderTopRightRadius: "9px",
        fontSize: text.xs,
        color: `rgba(${colors.textMutedR}, ${colors.textMutedG}, ${colors.textMutedB}, 1)`,
    },
    codeHeaderActions: {
        display: "flex",
        alignItems: "center",
        gap: "15px",
    },
    codeContent: {
        padding: "12px 16px",
        overflowX: "auto",
        fontFamily: fonts.mono,
    },
    githubLink: {
        display: "flex",
    },
    copyButton: {
        cursor: "pointer",
        background: "transparent",
        display: "flex",
        alignItems: "center",
        borderWidth: 0,
    },
    icon: {
        width: "16px",
        height: "16px",
        fill: "#00aaff",
    },
    inverseImage: {
        filter: {
            default:
                "invert(0%) sepia(3%) saturate(0%) hue-rotate(213deg) brightness(95%) contrast(103%)",
            [DARK]: "invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%)",
        },
    },
});
