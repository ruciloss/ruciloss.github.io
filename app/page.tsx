import Image from "next/image";
import * as stylex from "@stylexjs/stylex";
import CodeSnippet from "@/components/CodeSnippet";

const DARK = "@media (prefers-color-scheme: dark)";

const styles = stylex.create({
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        maxWidth: "600px",
        margin: "auto",
        padding: "15px",
    },
    card: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        gap: "50px",
        textAlign: "center",
    },
    textMuted: {
        color: {
            default: "#52525b",
            [DARK]: "#a1a1aa",
        },
    },
    gitClone: {
        fontSize: "14px",
        cursor: "pointer",
    },
    xs: {
        fontSize: "12px",
    },
    link: {
        color: "#00aaff",
        textDecoration: {
            default: "none",
            ":hover": "underline",
        },
        fontWeight: 600,
    },
    inverseImage: {
        filter: {
            default:
                "invert(0%) sepia(3%) saturate(0%) hue-rotate(213deg) brightness(95%) contrast(103%)",
            [DARK]: "invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%)",
        },
    },
    header: {
        display: "flex",
        flexDirection: {
            default: "column",
            "@media (min-width: 768px)": "row",
        },
        alignItems: "center",
        justifyContent: {
            default: "start",
            "@media (min-width: 768px)": "center",
        },
        gap: "30px",
    },
    divider: {
        fontSize: "60px",
        background: "linear-gradient(to right, purple, #00aaff)",
        WebkitBackgroundClip: "text",
        color: "transparent",
    },
    github: {
        display: "flex",
    },
    actions: {
        display: "flex",
        flexDirection: {
            default: "column",
            "@media (min-width: 768px)": "row",
        },
        alignItems: "center",
        justifyContent: {
            default: "start",
            "@media (min-width: 768px)": "center",
        },
        gap: "15px",
        padding: "10px 15px",
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: {
            default: "red",
            [DARK]: "blue",
        },
        borderRadius: "9px",
    },
    badges: {
        display: "flex",
        alignItems: "center",
        gap: "10px",
    },
    footer: {
        display: "flex",
        flexDirection: {
            default: "column",
            "@media (min-width: 768px)": "row",
        },
        alignItems: "center",
        justifyContent: {
            default: "start",
            "@media (min-width: 768px)": "center",
        },
        gap: "10px",
        marginTop: "10vh",
    },
    footerItem: {
        display: "flex",
        alignItems: "center",
        gap: "10px",
    },
    button: {
        display: "flex",
        alignItems: "center",
        gap: "10px",
        textDecoration: "none",
        borderRadius: "9px",
        color: "#00aaff",
        borderStyle: "solid",
        borderWidth: "2px",
        borderColor: "#00aaff",
        transition: "all .2s ease",
        padding: {
            default: "10px 15px",
            ":hover": "14px 18px",
        },
        margin: {
            default: "4px 3px",
            ":hover": "0",
        },
    },
});

export default function Homepage() {
    return (
        <div {...stylex.props(styles.container)}>
            <div {...stylex.props(styles.card)}>
                <div {...stylex.props(styles.header)}>
                    <Image
                        {...stylex.props(styles.inverseImage)}
                        src="/next.svg"
                        alt="Logo"
                        width={180}
                        height={37}
                    />

                    <div {...stylex.props(styles.divider)}>&</div>

                    <Image
                        {...stylex.props(styles.inverseImage)}
                        src="/stylex.svg"
                        alt="Logo"
                        width={140}
                        height={95}
                    />
                </div>
                <div {...stylex.props(styles.badges)}>
                    <Image
                        src="https://img.shields.io/badge/License-MIT-blue"
                        alt="See on GitHub"
                        width={82}
                        height={20}
                    />
                    <Image
                        src="https://img.shields.io/badge/Version-1.0.0-orange"
                        alt="See on GitHub"
                        width={90}
                        height={20}
                    />
                    <Image
                        src="https://img.shields.io/badge/Release-stable-brightgreen"
                        alt="See on GitHub"
                        width={96}
                        height={20}
                    />
                </div>
                <div>
                    A simple template for building modern websites with{" "}
                    <a
                        {...stylex.props(styles.link)}
                        href="https://nextjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Next.js
                    </a>{" "}
                    and{" "}
                    <a
                        {...stylex.props(styles.link)}
                        href="https://stylexjs.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        StyleX
                    </a>
                    , designed for fast development and easy customization.
                </div>
                <CodeSnippet />
                <div {...stylex.props(styles.footer)}>
                    <div {...stylex.props(styles.footerItem)}>
                        <Image
                            src="/logo.svg"
                            alt="Created by Ruciloss"
                            width={16}
                            height={16}
                        />
                        <div {...stylex.props(styles.xs, styles.textMuted)}>
                            Created by Ruciloss &copy;{" "}
                            {new Date().getFullYear()} &bull;{" "}
                            <a
                                {...stylex.props(styles.link)}
                                href="https://github.com/ruciloss/ruciloss.github.io/blob/master/LICENSE"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                License MIT
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
