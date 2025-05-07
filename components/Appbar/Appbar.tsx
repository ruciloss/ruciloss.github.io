import * as stylex from "@stylexjs/stylex";
import { styles } from "./Appbar.stylex";
import ThemeToggler from "@/components/ThemeToggler/ThemeToggler";

export default function Appbar() {
    return (
        <div role="banner" {...stylex.props(styles.wrapper)}>
            <h1>Ruciloss</h1>
            <div>
                <div role="navigation">Navigation</div>
                <ThemeToggler />
            </div>
        </div>
    );
}
