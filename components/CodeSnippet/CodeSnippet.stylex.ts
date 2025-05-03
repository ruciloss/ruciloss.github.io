import * as stylex from "@stylexjs/stylex";
import { text } from "../../app/globalTokens.stylex";

const DARK = "@media (prefers-color-scheme: dark)";

export const styles = stylex.create({
    codeBlock: {
        backgroundColor: {
            default: "#f3f4f6",
            [DARK]: "#09090b",
        },
        borderRadius: "9px",
        fontFamily: "monospace",
        overflowX: "auto",
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: "#27272a",
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
        color: {
            default: "#111827",
            [DARK]: "#d1d5db",
        },
    },
    codeContent: {
        padding: "12px 16px",
        fontSize: text.sm,
        color: {
            default: "#111827",
            [DARK]: "#e5e7eb",
        },
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
