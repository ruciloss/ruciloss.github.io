"use client";

import "./app.css";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./layout.stylex";
import { ThemeProvider, useTheme } from "@/contexts/ThemeContext";
import { light, dark } from "./themes";
import SelfXSSWarning from "@/components/SelfXSSWarning";
import Header from "@/components/Header/Header";
import Container from "@/components/Container/Container";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";

const Root = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider>
            <RootLayout>{children}</RootLayout>
        </ThemeProvider>
    );
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    const { theme } = useTheme();

    return (
        <html
            id="next"
            lang="en"
            dir="ltr"
            {...stylex.props(
                styles.reset,
                styles.html,
                theme === "light" && styles.htmlLight,
                theme === "dark" && styles.htmlDark,
                theme === "light" && light,
                theme === "dark" && dark,
            )}
        >
            <body {...stylex.props(styles.reset, styles.body)}>
                <Header />
                <Container>
                    <Breadcrumbs />
                    {children}
                </Container>
                <SelfXSSWarning />
            </body>
        </html>
    );
};

export default Root;
