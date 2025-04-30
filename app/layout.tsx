import type { Metadata } from "next";
import SelfXSSWarning from "@/components/SelfXSSWarning";
import { Inter } from "next/font/google";
import "./app.css";
import * as stylex from "@stylexjs/stylex";

const inter = Inter({
    subsets: ["latin"],
});

const DARK = "@media (prefers-color-scheme: light)";

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
        fontWeight: 400,
        lineHeight: 1.5,
        color: {
            default: "#52525b",
            [DARK]: "#a1a1aa",
        },
        backgroundImage: {
            default: "linear-gradient(to bottom, rgb(214, 219, 220), #fff)",
            [DARK]: "linear-gradient(to bottom, rgb(20, 22, 27), #000)",
        },
    },
});

export const metadata: Metadata = {
    title: "Next App",
    description: "Next App with StyleX",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            id="next"
            lang="en"
            dir="ltr"
            {...stylex.props(styles.html, styles.reset)}
        >
            <body {...stylex.props(styles.reset, styles.body)}>
                <main className={inter.className}>
                    {children}
                    <SelfXSSWarning />
                </main>
            </body>
        </html>
    );
}
