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
        gap: "40px",
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
        display: "flex",
        flexDirection: "column-reverse",
        alignItems: "center",
        justifyContent: "start",
        gap: "10px",

        "@media (min-width: 768px)": {
            flexDirection: "row",
            justifyContent: "space-between",
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
    footerLink: {
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
                    width={140}
                    height={0}
                    layout="intrinsic"
                    priority
                />

                <p>
                    A simple and efficient template for building modern websites
                    with Next.js and StyleX, designed for fast development and
                    easy customization.
                </p>

                <div {...stylex.props(styles.footer)}>
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
                            {...stylex.props(styles.footerLink)}
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
