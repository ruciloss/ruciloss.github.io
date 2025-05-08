"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./not-found.stylex";
import Inner from "@/components/Layout/Inner/Inner";

const NotFound = () => {
    const [countdown, setCountdown] = useState(10);
    const router = useRouter();

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prev) => {
                if (prev === 1) {
                    router.push("/");
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [router]);

    return (
        <Inner>
            <div {...stylex.props(styles.heading)}>
                <span>404</span>
                <span {...stylex.props(styles.divider)}></span>
                <span>This page could not be found.</span>
            </div>
            <span {...stylex.props(styles.paragraph)}>
                You will be redirected to the homepage in{" "}
                <span {...stylex.props(styles.countdown)}>{countdown}</span>{" "}
                seconds.
            </span>
        </Inner>
    );
};

export default NotFound;
