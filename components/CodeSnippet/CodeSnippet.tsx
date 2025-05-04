"use client";

import { useState } from "react";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./CodeSnippet.stylex";

const gitCommand: string =
    "git clone https://github.com/ruciloss/ruciloss.github.io.git";

const CopyIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
);

const CheckIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M20 6 9 17l-5-5" />
    </svg>
);

export default function CodeSnippet() {
    const [copied, setCopied] = useState<boolean>(false);

    const handleCopy = async (): Promise<void> => {
        await navigator.clipboard.writeText(gitCommand);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    return (
        <pre {...stylex.props(styles.wrapper)}>
            <div {...stylex.props(styles.header)}>
                <span>bash</span>
                <div {...stylex.props(styles.actions)}>
                    <button
                        {...stylex.props(styles.button)}
                        onClick={handleCopy}
                        aria-label="Copy to clipboard"
                    >
                        <span>{copied ? <CheckIcon /> : <CopyIcon />}</span>
                        {copied ? "Copied!" : "Copy"}
                    </button>
                </div>
            </div>
            <span {...stylex.props(styles.code)}>{gitCommand}</span>
        </pre>
    );
}
