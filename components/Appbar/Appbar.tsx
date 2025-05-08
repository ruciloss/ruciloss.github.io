import * as stylex from "@stylexjs/stylex";
import { styles } from "./Appbar.stylex";
import ThemeToggler from "@/components/ThemeToggler/ThemeToggler";

const Appbar = () => {
    return (
        <div role="banner" {...stylex.props(styles.wrapper)}>
            <h1>Ruciloss</h1>
            <div>
                <ThemeToggler />
            </div>
        </div>
    );
};

export default Appbar;
