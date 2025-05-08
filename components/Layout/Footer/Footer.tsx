import Image from "next/image";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./Footer.stylex";

const Footer = () => (
    <div role="contentinfo" {...stylex.props(styles.wrapper)}>
        <div {...stylex.props(styles.item)}>
            <Image
                src="/logo.svg"
                alt="Created by Ruciloss"
                width={16}
                height={16}
            />
            <span>Created by Ruciloss &copy; {new Date().getFullYear()}</span>
        </div>
        <div {...stylex.props(styles.item)}>
            <a
                href="https://github.com/ruciloss/ruciloss.github.io/blob/master/LICENSE"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Link to Licene MIT"
                role="link"
                {...stylex.props(styles.link)}
            >
                License MIT
            </a>
            <span>&mdash;</span>
            <a
                href="https://github.com/ruciloss/ruciloss.github.io"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Link to GitHub"
                role="link"
                {...stylex.props(styles.link)}
            >
                GitHub
            </a>
        </div>
    </div>
);

export default Footer;
