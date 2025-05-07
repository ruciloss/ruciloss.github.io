import { useTheme } from "@/contexts/ThemeContext";

import * as stylex from "@stylexjs/stylex";
import { styles } from "./ThemeToggler.stylex";

const ThemeToggler = () => {
    const { theme, setTheme } = useTheme();

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setTheme(event.target.value as "system" | "light" | "dark");
    };

    return (
        <select
            {...stylex.props(styles.wrapper)}
            value={theme}
            onChange={handleChange}
        >
            <option value="system">System</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
        </select>
    );
};

export default ThemeToggler;
