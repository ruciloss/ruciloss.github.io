"use client";

import * as stylex from "@stylexjs/stylex";
import { light, dark } from "@/app/themes";
import { useState } from "react";

export default function ThemeProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [theme, setTheme] = useState<string>("system");

    const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setTheme(event.target.value);
    };

    return (
        <main
            {...stylex.props(
                theme === "light" && light,
                theme === "dark" && dark,
            )}
        >
            {children}

            {/* Select pro výběr tématu */}
            <select
                value={theme}
                onChange={handleThemeChange}
                style={{ position: "fixed", top: 20, right: 20 }}
            >
                <option value="system">System</option>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
            </select>
        </main>
    );
}
