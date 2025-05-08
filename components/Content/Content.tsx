import * as stylex from "@stylexjs/stylex";
import { styles } from "./Content.stylex";
import Shields from "@/components/Shields/Shields";

const Content = () => (
    <div>
        <span {...stylex.props(styles.heading)} role="heading" aria-level={1}>
            NexteX
        </span>
        <Shields
            shields={[
                { label: "License", message: "MIT", color: "blue" },
                { label: "Version", message: "1.0.0", color: "orange" },
                { label: "Release", message: "stable", color: "brightgreen" },
            ]}
        />
        <span>
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
        </span>
    </div>
);

export default Content;
