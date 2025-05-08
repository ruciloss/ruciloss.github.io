import * as stylex from "@stylexjs/stylex";
import { styles } from "./Wrapper.stylex";

const Container = ({ children }: { children: React.ReactNode }) => (
    <div role="main" {...stylex.props(styles.wrapper)}>
        {children}
    </div>
);

export default Container;
