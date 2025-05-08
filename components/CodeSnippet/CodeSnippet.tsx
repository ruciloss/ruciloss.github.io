"use client";

import { useState } from "react";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./CodeSnippet.stylex";
import { Copy, Check } from "lucide-react";

const command: string =
    "git clone https://github.com/ruciloss/ruciloss.github.io.git";

const CodeSnippet = () => {
    const [copied, setCopied] = useState<boolean>(false);

    const handleCopy = async (): Promise<void> => {
        await navigator.clipboard.writeText(command);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    return (
        <pre {...stylex.props(styles.wrapper)}>
            <div {...stylex.props(styles.header)}>
                <span>bash</span>
                <span {...stylex.props(styles.actions)}>
                    <button
                        onClick={handleCopy}
                        aria-label="Copy to clipboard"
                        {...stylex.props(styles.button)}
                    >
                        <span>
                            {copied ? (
                                <Check
                                    width={16}
                                    height={16}
                                    strokeWidth={2}
                                    role="img"
                                    aria-label="Copied icon"
                                />
                            ) : (
                                <Copy
                                    width={16}
                                    height={16}
                                    strokeWidth={2}
                                    role="img"
                                    aria-label="Copy icon"
                                />
                            )}
                        </span>
                        {copied ? "Copied!" : "Copy"}
                    </button>
                </span>
            </div>
            <span {...stylex.props(styles.code)}>{command}</span>
        </pre>
    );
};

export default CodeSnippet;
