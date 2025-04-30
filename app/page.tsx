import Image from "next/image";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
    container: {
        display: "flex",
        flexDirection: "column", // Zajistí, že vše bude ve sloupci (na novém řádku)
        justifyContent: "center", // Vertikální vycentrování
        alignItems: "center", // Horizontální vycentrování
        height: "100vh", // Výška na 100% viewportu
        textAlign: "center", // Uprostřed textu
    },
    logo: {
        width: "150px", // Šířka loga
        height: "auto", // Automatická výška (pro zachování proporcí)
        marginBottom: "20px", // Mezera pod logem
    },
    heading: {
        fontSize: "32px", // Velikost nadpisu
        fontWeight: "bold", // Tučný text
        marginBottom: "10px", // Mezera pod nadpisem
    }
});

export default function Navbar() {
    return (
        <div {...stylex.props(styles.container)}>
            <Image
                {...stylex.props(styles.logo)}
                src="/next.svg"
                alt="Logo"
                width={180}
                height={38}
                priority
            />

            <h1 {...stylex.props(styles.heading)}>Welcome to MySite</h1>

            <p>
                This is a simple website built with Next.js and StyleX.
            </p>
        </div>
    );
}
