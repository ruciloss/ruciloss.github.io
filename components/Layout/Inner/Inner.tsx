import * as stylex from "@stylexjs/stylex";
import { styles } from "./Inner.stylex";

const Card = ({ children }: { children: React.ReactNode }) => {
    return <div {...stylex.props(styles.wrapper)}>{children}</div>;
};

export default Card;
