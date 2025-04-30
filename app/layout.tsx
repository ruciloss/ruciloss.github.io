// Core
import type { Metadata } from "next";

// Components
import SelfXSSWarning from "@/components/SelfXSSWarning";

// Fonts
import { Inter } from "next/font/google";

// Styles
import "./app.css";
import * as stylex from "@stylexjs/stylex";

const DARK = "@media (prefers-color-scheme: dark)";

const styles = stylex.create({
    html: {
        colorScheme: "light dark",
    },
    reset: {
        minHeight: "100%",
        margin: 0,
        padding: 0,
    },
    body: {
        fontFamily: "'Inter', sans-serif",
        color: {
            default: "red",
            [DARK]: "blue",
        },
        backgroundImage: {
            default: "linear-gradient(to bottom, rgb(214, 219, 220), white)",
            [DARK]: "linear-gradient(to bottom, rgb(20, 22, 27), black)",
        },
    },
});

// Metadata
export const metadata: Metadata = {
    title: "Next App",
    description: "Next App with StyleX",
};

// Root
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            id="ruciloss"
            lang="en"
            {...stylex.props(styles.html, styles.reset)}
        >
            <body {...stylex.props(styles.reset, styles.body)}>
                {children}
                <SelfXSSWarning />
            </body>
        </html>
    );
}
