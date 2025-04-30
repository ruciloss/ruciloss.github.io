"use client";

import { useEffect } from "react";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
    vs,
    vscDarkPlus,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import * as stylex from "@stylexjs/stylex";
import { Clipboard, Check } from "lucide-react";

const DARK = "@media (prefers-color-scheme: dark)";

const styles = stylex.create({
    container: {
        backgroundColor: "#1e1e1e",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 0 10px rgba(0,0,0,0.3)",
    },
    header: {
        backgroundColor: "#2d2d2d",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "8px 12px",
        borderBottom: "1px solid #444",
    },
    langLabel: {
        color: "#fff",
        fontSize: "14px",
        fontFamily: "monospace",
    },
    copyButton: {
        color: "#fff",
        backgroundColor: "transparent",
        border: "none",
        cursor: "pointer",
        fontSize: "14px",
        padding: 0,
        display: "flex",
        alignItems: "center",
        gap: "6px",
    },
    icon: {
        width: "16px",
        height: "16px",
    },
});

export default function CodeBlock() {
    const [theme, setTheme] = useState(vs);

    useEffect(() => {
        const match = window.matchMedia("(prefers-color-scheme: dark)");
        const updateTheme = () => setTheme(match.matches ? vscDarkPlus : vs);

        updateTheme();
        match.addEventListener("change", updateTheme);

        return () => match.removeEventListener("change", updateTheme);
    }, []);

    const codeString = `
git clone https://github.com/ruciloss/ruciloss.github.io.git
cd ruciloss.github.io
  `.trim();

    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(codeString);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Kopírování selhalo:", err);
        }
    };

    return (
        <div {...stylex.props(styles.container)}>
            <div {...stylex.props(styles.header)}>
                <span {...stylex.props(styles.langLabel)}>bash</span>
                <button
                    onClick={handleCopy}
                    {...stylex.props(styles.copyButton)}
                >
                    {copied ? (
                        <>
                            <Check {...stylex.props(styles.icon)} />
                        </>
                    ) : (
                        <>
                            <Clipboard {...stylex.props(styles.icon)} />
                        </>
                    )}
                </button>
            </div>
            <SyntaxHighlighter
                language="bash"
                style={theme} // <- dynamický
                customStyle={{
                    margin: 0,
                    padding: "10px 20px",
                    borderRadius: "9px",
                }}
            >
                {codeString}
            </SyntaxHighlighter>
        </div>
    );
}
