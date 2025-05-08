import * as stylex from "@stylexjs/stylex";
import { styles } from "./Card.stylex";

const Card = ({ children }: { children: React.ReactNode }) => {
    return <div {...stylex.props(styles.card)}>{children}</div>;
};

export default Card;
