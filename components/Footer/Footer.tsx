import Image from "next/image";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./Footer.stylex";

export default function Footer() {
    return (
        <div {...stylex.props(styles.wrapper)}>
            <div {...stylex.props(styles.item)}>
                <Image
                    src="/logo.svg"
                    alt="Created by Ruciloss"
                    width={16}
                    height={16}
                />
                <p>Created by Ruciloss &copy; {new Date().getFullYear()}</p>
            </div>
            <div {...stylex.props(styles.item)}>
                <a
                    {...stylex.props(styles.link)}
                    href="https://github.com/ruciloss/ruciloss.github.io/blob/master/LICENSE"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    License MIT
                </a>
                <span>&mdash;</span>
                <a
                    href="https://github.com/ruciloss/ruciloss.github.io"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        {...stylex.props(styles.inverseImage)}
                        src="/github.svg"
                        alt="GitHub"
                        width={18}
                        height={18}
                    />
                </a>
            </div>
        </div>
    );
}
