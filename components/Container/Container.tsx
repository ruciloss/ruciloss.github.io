import * as stylex from "@stylexjs/stylex";
import { styles } from "./Container.stylex";

export default function Container({ children }: { children: React.ReactNode }) {
    return <main {...stylex.props(styles.wrapper)}>{children}</main>;
}
