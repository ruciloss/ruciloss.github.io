import * as stylex from "@stylexjs/stylex";
import { styles } from "./Link.stylex";

interface LinkProps {
    href: string;
    children: React.ReactNode;
    target?: "_self" | "_blank";
}

export default function Link({ href, children, target = "_self" }: LinkProps) {
    const rel = target === "_blank" ? "noopener noreferrer" : undefined;

    return (
        <a {...stylex.props(styles.link)} href={href} target={target} rel={rel}>
            {children}
        </a>
    );
}
