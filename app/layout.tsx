"use client";

import "./app.css";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./layout.stylex";
import { useState } from "react";
import { light, dark } from "./themes";
import SelfXSSWarning from "@/components/SelfXSSWarning";
import Appbar from "@/components/Appbar/Appbar";

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
                <Appbar>
                    <h1>Ruciloss</h1>
                </Appbar>
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
