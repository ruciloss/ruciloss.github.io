import * as stylex from "@stylexjs/stylex";

export const styles = stylex.create({
    link: {
        color: "#00aaff",
        fontWeight: 600,
        textDecoration: {
            default: "none",
            ":hover": "underline",
        },
    },
});
