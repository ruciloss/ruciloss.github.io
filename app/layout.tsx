import type { Metadata } from "next";
import "./app.css";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./layout.stylex";
import SelfXSSWarning from "@/components/SelfXSSWarning";
import ThemeProvider from "@/components/ThemeProvider/ThemeProvider";
import Wrapper from "@/components/Wrapper/Wrapper";

export const metadata: Metadata = {
    title: "Next.js & StyleX",
    description:
        "A simple template for building modern websites with Next.js & StyleX.",
};

export default function Root({ children }: { children: React.ReactNode }) {
    return (
        <html
            id="next"
            lang="en"
            dir="ltr"
            {...stylex.props(styles.html, styles.reset)}
        >
            <body {...stylex.props(styles.reset, styles.body)}>
                <ThemeProvider>
                    <Wrapper>
                        {children}
                        <SelfXSSWarning />
                    </Wrapper>
                </ThemeProvider>
            </body>
        </html>
    );
}
