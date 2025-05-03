import Image from "next/image";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./Footer.stylex";
import Link from "@/components/Link/Link";

export default function Footer() {
    return (
        <div {...stylex.props(styles.footer)}>
            <div {...stylex.props(styles.footerItem)}>
                <Image
                    src="/logo.svg"
                    alt="Created by Ruciloss"
                    width={16}
                    height={16}
                />
                <div>
                    Created by Ruciloss &copy; {new Date().getFullYear()} &bull;{" "}
                    <Link
                        href="https://github.com/ruciloss/ruciloss.github.io/blob/master/LICENSE"
                        target="_blank"
                    >
                        License MIT
                    </Link>
                </div>
            </div>
        </div>
    );
}
