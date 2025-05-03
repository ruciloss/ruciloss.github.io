import type { Metadata } from "next";
import SelfXSSWarning from "@/components/SelfXSSWarning";
import { Inter } from "next/font/google";
import "./app.css";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./layout.stylex";

const inter = Inter({
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Next.js & StyleX",
    description:
        "A simple template for building modern websites with Next.js & StyleX.",
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
                <div className={inter.className}>
                    {children}
                    <SelfXSSWarning />
                </div>
            </body>
        </html>
    );
}
