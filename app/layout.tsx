"use client";

import "./app.css";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./layout.stylex";
import SelfXSSWarning from "@/components/SelfXSSWarning";
import { useState } from "react";
import { light, dark } from "./themes";

export default function Root({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<string>("system");

    const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setTheme(event.target.value);
    };

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
                {children}
                <select
                    value={theme}
                    onChange={handleThemeChange}
                    style={{ position: "fixed", top: 20, right: 20 }}
                >
                    <option value="system">System</option>
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                </select>
                <SelfXSSWarning />
            </body>
        </html>
    );
}
