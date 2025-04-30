import Image from "next/image";
import * as stylex from "@stylexjs/stylex";

const DARK = "@media (prefers-color-scheme: dark)";

const styles = stylex.create({
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
    },
    wrap: {
        maxWidth: "600px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "start",
        gap: "50px",
    },
    row: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "start",

        "@media (min-width: 768px)": {
            flexDirection: "row",
            justifyContent: "space-between",
        },
    },
    header: {
        gap: "30px",
    },
    heading: {
        color: {
            default: "#000",
            [DARK]: "#fff",
        },
        fontSize: "26px",
        fontWeight: "700",
    },
    small: {
        fontSize: "14px",
    },
    footer: {
        gap: "10px",
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
    link: {
        color: "#00aaff",
        textDecoration: "none",
        fontWeight: "600",
        ":hover": {
            textDecoration: "underline",
        },
    },
});

export default function Homepage() {
    return (
        <div {...stylex.props(styles.container)}>
            <div {...stylex.props(styles.wrap)}>
                <div {...stylex.props(styles.row, styles.header)}>
                    <Image
                        src="/next.svg"
                        alt="Logo"
                        width={180}
                        height={0}
                        layout="intrinsic"
                        priority
                    />

                    <h1 {...stylex.props(styles.heading)}>&</h1>

                    <Image
                        src="/stylex.svg"
                        alt="Logo"
                        width={130}
                        height={0}
                        layout="intrinsic"
                        priority
                    />
                </div>
                <p>
                    A simple and efficient template for building modern websites
                    with {" "}
                    <a
                        {...stylex.props(styles.link)}
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Next.js
                    </a>
                    {" "} and {" "}
                    <a
                        {...stylex.props(styles.link)}
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        StyleX
                    </a>
                    , designed for fast development and easy customization.
                </p>

                <p>
    Also includes:{" "}
    <a
        {...stylex.props(styles.link)}
        href="#"
        target="_blank"
        rel="noopener noreferrer"
    >
        GitHub CI/CD
    </a>,{" "}
    <a
        {...stylex.props(styles.link)}
        href="#"
        target="_blank"
        rel="noopener noreferrer"
    >
        Husky
    </a>{" "}+{" "}
    <a
        {...stylex.props(styles.link)}
        href="#"
        target="_blank"
        rel="noopener noreferrer"
    >
        Lint Staged
    </a>,{" "}
    <a
        {...stylex.props(styles.link)}
        href="#"
        target="_blank"
        rel="noopener noreferrer"
    >
        Prettier
    </a>
</p>


                <div {...stylex.props(styles.row, styles.footer)}>
                    <div {...stylex.props(styles.footerItem)}>
                        <Image
                            {...stylex.props(styles.footerImage)}
                            src="/logo.svg"
                            alt="Created by Ruciloss"
                            width={18}
                            height={0}
                            layout="intrinsic"
                        />
                        <small {...stylex.props(styles.small)}>
                            Created by Ruciloss
                        </small>
                        <small>&bull;</small>
                        <a
                            {...stylex.props(styles.link)}
                            href="https://github.com/ruciloss/ruciloss.github.io"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            See on GitHub
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
