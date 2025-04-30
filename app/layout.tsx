// Core
import type { Metadata } from "next";

// Components
import SelfXSSWarning from "@/components/SelfXSSWarning";
import GoogleAnalytics from "@/components/GoogleAnalytics";

// Fonts
import { Inter } from "next/font/google";

const inter = Inter({
    subsets: ['latin'],
});

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
        minHeight: "100%",
        fontSize: "16px",
        color: {
            default: "black",
            [DARK]: "white",
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
            id="next"
            lang="en"
            {...stylex.props(styles.html, styles.reset)}
        >
            <body {...stylex.props(styles.reset, styles.body)}>
                <main className={inter.className}>
                    {children}
                    <GoogleAnalytics id="G-ABCDEF1234" />
                    <SelfXSSWarning />
                </main>
            </body>
        </html>
    );
}
