import * as stylex from "@stylexjs/stylex";
import { styles } from "./Appbar.stylex";

export default function Appbar({ children }: { children: React.ReactNode }) {
    return (
        <div role="banner" {...stylex.props(styles.wrapper)}>
            {children}
        </div>
    );
}
