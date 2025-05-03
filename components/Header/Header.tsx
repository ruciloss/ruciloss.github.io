import Image from "next/image";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./Header.stylex";

export default function Header() {
    return (
        <div {...stylex.props(styles.header)}>
            <Image
                {...stylex.props(styles.inverseImage)}
                src="/next.svg"
                alt="Next.js Logo"
                width={180}
                height={37}
            />
            <div {...stylex.props(styles.headerDivider)}>&</div>
            <Image
                {...stylex.props(styles.inverseImage)}
                src="/stylex.svg"
                alt="StyleX Logo"
                width={140}
                height={95}
            />
        </div>
    );
}
