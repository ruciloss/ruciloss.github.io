// Core
import type { Metadata } from "next";

// Components
import SelfXSSWarning from "@/components/SelfXSSWarning";
import CookieConsent from "@/components/CookieConsent";
import GoogleAnalytics from "@/components/GoogleAnalytics";

// Fonts
import { Inter } from "next/font/google";

const inter = Inter({
    weight: '400',
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
        fontFamily: `var(--font-inter), sans-serif`,
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
                <main className={inter.className}>
                    {children}
                    <GoogleAnalytics id="G-ABCDEF1234" />
                    <CookieConsent />
                    <SelfXSSWarning />
                </main>
            </body>
        </html>
    );
}
