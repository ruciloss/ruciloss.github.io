import * as stylex from "@stylexjs/stylex";
import { styles } from "./Header.stylex";

const Header = () => (
    <div {...stylex.props(styles.wrapper)}>
        <h1 {...stylex.props(styles.heading)}>NexteX</h1>
    </div>
);

export default Header;
