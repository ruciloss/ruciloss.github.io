import * as stylex from "@stylexjs/stylex";
import { styles } from "./Content.stylex";
import Shields from "@/components/Shields/Shields";

const Content = () => (
    <div>
        <span role="heading" aria-level={1} {...stylex.props(styles.heading)}>
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
            A streamlined starter template leveraging a modern tech stack for
            rapid development and effortless customization.
        </span>
    </div>
);

export default Content;
