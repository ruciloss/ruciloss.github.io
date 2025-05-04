"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./not-found.stylex";
import Container from "@/components/Container/Container";

export default function NotFound() {
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
        <Container>
            <div {...stylex.props(styles.wrapper)}>
                <h1 {...stylex.props(styles.error)}>404</h1>
                <span {...stylex.props(styles.divider)}></span>
                <p {...stylex.props(styles.error)}>
                    This page could not be found.
                </p>
            </div>
            <p {...stylex.props(styles.paragraph)}>
                You will be redirected to the homepage in{" "}
                <span {...stylex.props(styles.countdown)}>{countdown}</span>{" "}
                seconds.
            </p>
        </Container>
    );
}
