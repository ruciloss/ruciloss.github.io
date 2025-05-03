"use client";

import Image from "next/image";
import { useState } from "react";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./CodeSnippet.stylex";

const gitCommand =
    "git clone https://github.com/ruciloss/ruciloss.github.io.git";

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
                <div>bash</div>
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
                            {...stylex.props(styles.inverseImage)}
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
                        <Image
                            {...stylex.props(styles.inverseImage)}
                            src={copied ? "/check.svg" : "/copy.svg"}
                            alt={copied ? "Copied" : "Copy"}
                            width={16}
                            height={16}
                        />
                    </button>
                </div>
            </div>
            <div {...stylex.props(styles.codeContent)}>{gitCommand}</div>
        </div>
    );
}
