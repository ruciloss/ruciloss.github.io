import * as stylex from "@stylexjs/stylex";
import { styles } from "./Wrapper.stylex";

export default function Wrapper({ children }: { children: React.ReactNode }) {
    return <div {...stylex.props(styles.wrapper)}>{children}</div>;
}
