"use client";

import { useState } from "react";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./CodeSnippet.stylex";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faCheck } from "@fortawesome/free-solid-svg-icons";

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
                <div {...stylex.props(styles.actions)}>
                    <button
                        {...stylex.props(styles.button)}
                        onClick={handleCopy}
                        aria-label="Copy to clipboard"
                    >
                        <span>
                            <FontAwesomeIcon
                                icon={copied ? faCheck : faCopy}
                                width={16}
                                height={16}
                            />
                        </span>
                        {copied ? "Copied!" : "Copy"}
                    </button>
                </div>
            </div>
            <span {...stylex.props(styles.code)}>{command}</span>
        </pre>
    );
};

export default CodeSnippet;
