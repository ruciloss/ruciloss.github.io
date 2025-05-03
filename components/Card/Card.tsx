import * as stylex from "@stylexjs/stylex";
import { styles } from "./Card.stylex";

export default function Card({ children }: { children: React.ReactNode }) {
    return <div {...stylex.props(styles.card)}>{children}</div>;
}
