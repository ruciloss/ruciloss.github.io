import Link from "next/link";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./Appbar.stylex";
import ThemeToggler from "@/components/ThemeToggler/ThemeToggler";
import Logo from "./Logo";

const Appbar = () => {
    return (
        <div role="banner" {...stylex.props(styles.wrapper)}>
            <div {...stylex.props(styles.wrapperInner)}>
                <Link href="/" {...stylex.props(styles.logo)}>
                    <Logo />
                </Link>
            </div>
            <div {...stylex.props(styles.wrapperInner)}>
                <ThemeToggler />
            </div>
        </div>
    );
};

export default Appbar;
