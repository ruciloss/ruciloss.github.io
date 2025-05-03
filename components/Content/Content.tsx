import * as stylex from "@stylexjs/stylex";
import { styles } from "./Content.stylex";

export default function Content() {
    return (
        <div>
            A simple template for building modern websites with{" "}
            <a
                {...stylex.props(styles.link)}
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Next.js
            </a>{" "}
            and{" "}
            <a
                {...stylex.props(styles.link)}
                href="https://stylexjs.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                StyleX
            </a>
            , designed for fast development and easy customization.
        </div>
    );
}
