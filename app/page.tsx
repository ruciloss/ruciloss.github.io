import Image from "next/image";
import * as stylex from "@stylexjs/stylex";

const DARK = "@media (prefers-color-scheme: light)";

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
        padding: "0 15px",
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
        marginTop: "25px",
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
    divider: {
        fontSize: "60px",
        background: "linear-gradient(to right, purple, #00aaff)",
        WebkitBackgroundClip: "text",
        color: "transparent",
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
    inverseImage: {
        filter: {
            default: "invert(0%) sepia(3%) saturate(0%) hue-rotate(213deg) brightness(95%) contrast(103%)",
            [DARK]: "invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%)",
        },
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
        padding: "8px 15px",
        borderRadius: "9px",
        color: {
            default: "#000",
            [DARK]: "#fff",
        },
        borderStyle: "solid",
        borderWidth: "2px",
        borderColor: {
            default: "#000",
            [DARK]: "#fff",
        },
        transition: "all .2s ease",

        ":hover": {
            borderColor: "transparent",
        },
    },
});

export default function Homepage() {
    return (
        <div {...stylex.props(styles.container)}>
            <div {...stylex.props(styles.wrap)}>
                <div {...stylex.props(styles.header)}>
                    <Image
                        {...stylex.props(styles.inverseImage)}
                        src="/next.svg"
                        alt="Logo"
                        width={180}
                        height={0}
                        layout="intrinsic"
                        priority
                    />

                    <div {...stylex.props(styles.divider)}>&</div>

                    <Image
                        {...stylex.props(styles.inverseImage)}
                        src="/stylex.svg"
                        alt="Logo"
                        width={140}
                        height={0}
                        layout="intrinsic"
                        priority
                    />
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
                <a
                    {...stylex.props(styles.button)}
                    href="https://github.com/ruciloss/ruciloss.github.io"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        {...stylex.props(styles.inverseImage)}
                        src="/github.svg"
                        alt="Created by Ruciloss"
                        width={26}
                        height={0}
                        layout="intrinsic"
                    />
                    See on GitHub
                </a>
                <div {...stylex.props(styles.footer)}>
                    <div {...stylex.props(styles.footerItem)}>
                        <Image
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
