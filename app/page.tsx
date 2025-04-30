import Image from "next/image";
import * as stylex from "@stylexjs/stylex";
import CodeBlock from "@/components/CodeBlock";
import { Download, Github } from "lucide-react";

const DARK = "@media (prefers-color-scheme: dark)";

const styles = stylex.create({
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        height: "100vh",
        paddingTop: "20vh",
    },
    wrap: {
        maxWidth: "600px",
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
    small: {
        fontSize: "14px",
        display: "block",
        marginTop: "15px",
    },
    xs: {
        fontSize: "12px",
    },
    link: {
        color: "#00aaff",
        textDecoration: "none",
        fontWeight: "600",
        ":hover": {
            textDecoration: "underline",
        },
    },
    header: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "start",
        gap: "30px",

        "@media (min-width: 768px)": {
            flexDirection: "row",
            justifyContent: "center",
        },
    },
    heading: {
        fontSize: "60px",
        background: "linear-gradient(to right, purple, #00aaff)",
        WebkitBackgroundClip: "text",
        color: "transparent",
    },
    divider: {
        fontSize: "26px",
        fontWeight: "700",
    },
    footer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "start",
        gap: "10px",
        marginTop: "10vh",

        "@media (min-width: 768px)": {
            flexDirection: "row",
            justifyContent: "center",
        },
    },
    footerItem: {
        display: "flex",
        alignItems: "center",
        gap: "10px",
    },
    footerImage: {
        width: "18px",
        height: "auto",
    },
    buttons: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
    },
    button: {
        borderRadius: "9px",
        fontWeight: "600",
        textAlign: "center",
        cursor: "pointer",
        color: "#00aaff",
        textDecoration: "none",
        ":hover": {
            textDecoration: "underline",
        },
    },
});

export default function Homepage() {
    return (
        <div {...stylex.props(styles.container)}>
            <div {...stylex.props(styles.wrap)}>
                <div {...stylex.props(styles.header)}>
                    <h1 {...stylex.props(styles.heading)}>NEXT.JS & StyleX</h1>
                </div>
                <div>
                    A simple and efficient template for building modern websites
                    with{" "}
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
                    <div {...stylex.props(styles.small, styles.textMuted)}>
                        Also includes:{" "}
                        <a
                            {...stylex.props(styles.link)}
                            href="https://docs.github.com/en/actions"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub CI/CD
                        </a>
                        ,{" "}
                        <a
                            {...stylex.props(styles.link)}
                            href="https://typicode.github.io/husky"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Husky
                        </a>{" "}
                        +{" "}
                        <a
                            {...stylex.props(styles.link)}
                            href="https://github.com/okonet/lint-staged"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Lint Staged
                        </a>
                        ,{" "}
                        <a
                            {...stylex.props(styles.link)}
                            href="https://prettier.io"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Prettier
                        </a>{" "}
                        and more..
                    </div>
                </div>
                <div {...stylex.props(styles.buttons)}>
                    <a
                        {...stylex.props(styles.button)}
                        href="https://github.com/ruciloss/ruciloss.github.io/releases"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Download
                            style={{ width: 16, height: 16, marginRight: 8 }}
                        />
                        Download
                    </a>
                    or
                    <a
                        {...stylex.props(styles.button)}
                        href="https://github.com/ruciloss/ruciloss.github.io"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Github
                            style={{ width: 16, height: 16, marginRight: 8 }}
                        />
                        See on GitHub
                    </a>
                </div>
                <CodeBlock />
                <div {...stylex.props(styles.footer)}>
                    <div {...stylex.props(styles.footerItem)}>
                        <Image
                            {...stylex.props(styles.footerImage)}
                            src="/logo.svg"
                            alt="Created by Ruciloss"
                            width={16}
                            height={0}
                            layout="intrinsic"
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
