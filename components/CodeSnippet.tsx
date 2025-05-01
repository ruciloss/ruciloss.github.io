"use client";

import Image from "next/image";
import { useState } from "react";
import * as stylex from "@stylexjs/stylex";

const gitCommand =
    "git clone https://github.com/ruciloss/ruciloss.github.io.git";

const DARK = "@media (prefers-color-scheme: dark)";

const styles = stylex.create({
    codeBlock: {
        width: "100%",
        backgroundColor: {
            default: "#f3f4f6",
            [DARK]: "#1f2937",
        },
        borderRadius: "8px",
        fontFamily: "monospace",
        overflowX: "auto",
    },
    codeHeader: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: {
            default: "#e5e7eb",
            [DARK]: "#374151",
        },
        padding: "8px 12px",
        borderTopLeftRadius: "8px",
        borderTopRightRadius: "8px",
        fontSize: "12px",
        fontWeight: 600,
        color: {
            default: "#111827",
            [DARK]: "#d1d5db",
        },
    },
    codeContent: {
        padding: "12px 16px",
        fontSize: "14px",
        color: {
            default: "#111827",
            [DARK]: "#e5e7eb",
        },
    },
    githubLink: {
        display: "flex",
        alignItems: "center",
        gap: "6px",
        fontSize: "12px",
        color: "#00aaff",
        textDecoration: {
            default: "none",
            ":hover": "underline",
        },
    },
    copyButton: {
        cursor: "pointer",
        padding: "4px 6px",
        background: "transparent",
        display: "flex",
        alignItems: "center",
    },
    icon: {
        width: "16px",
        height: "16px",
        fill: "#00aaff",
    },
});

export default function CodeSnippet() {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(gitCommand);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    return (
        <div {...stylex.props(styles.codeBlock)}>
            <div {...stylex.props(styles.codeHeader)}>
                <span>bash</span>
                <div
                    style={{
                        display: "flex",
                        gap: "10px",
                        alignItems: "center",
                    }}
                >
                    <a
                        {...stylex.props(styles.githubLink)}
                        href="https://github.com/ruciloss/ruciloss.github.io"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="/github.svg"
                            alt="GitHub"
                            width={16}
                            height={16}
                        />
                    </a>
                    <button
                        {...stylex.props(styles.copyButton)}
                        onClick={handleCopy}
                        aria-label="Copy to clipboard"
                    >
                        {copied ? "✅" : "📝"}
                    </button>
                </div>
            </div>
            <div {...stylex.props(styles.codeContent)}>{gitCommand}</div>
        </div>
    );
}
