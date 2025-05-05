import * as stylex from "@stylexjs/stylex";
import { styles } from "./Container.stylex";

export default function Container({ children }: { children: React.ReactNode }) {
    return (
        <div role="main" {...stylex.props(styles.wrapper)}>
            {children}
        </div>
    );
}
