import Image from "next/image";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./Shields.stylex";

type Shield = {
    label: string;
    message: string;
    color: string;
};

type ShieldsProps = {
    shields: Shield[];
};

const Shields = ({ shields }: ShieldsProps) => {
    return (
        <div {...stylex.props(styles.wrapper)}>
            {shields.map((shield, index) => {
                const src = `https://img.shields.io/badge/${encodeURIComponent(
                    shield.label,
                )}-${encodeURIComponent(shield.message)}-${shield.color}`;

                return (
                    <Image
                        key={index}
                        src={src}
                        alt={`${shield.label} badge`}
                        width={
                            shield.message.length * 9 + shield.label.length * 7
                        }
                        height={20}
                    />
                );
            })}
        </div>
    );
};

export default Shields;
