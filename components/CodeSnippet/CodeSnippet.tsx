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
        <div {...stylex.props(styles.wrapper)}>
            <div {...stylex.props(styles.header)}>
                <span>bash</span>
                <div {...stylex.props(styles.actions)}>
                    <button
                        {...stylex.props(styles.button)}
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
                        {copied ? "Copied!" : "Copy"}
                    </button>
                </div>
            </div>
            <p {...stylex.props(styles.code)}>{gitCommand}</p>
        </div>
    );
}
