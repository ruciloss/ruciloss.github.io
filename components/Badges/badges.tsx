import Image from "next/image";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./badges.stylex";

export default function Badges() {
    return (
        <div {...stylex.props(styles.badges)}>
            <Image
                src="https://img.shields.io/badge/License-MIT-blue"
                alt="License badge"
                width={82}
                height={20}
            />
            <Image
                src="https://img.shields.io/badge/Version-1.0.0-orange"
                alt="Version badge"
                width={90}
                height={20}
            />
            <Image
                src="https://img.shields.io/badge/Release-stable-brightgreen"
                alt="Release badge"
                width={96}
                height={20}
            />
        </div>
    );
}
