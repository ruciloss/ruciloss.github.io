import * as stylex from "@stylexjs/stylex";
import { styles } from "./Breadcrumbs.stylex";
import { usePathname } from "next/navigation"; // Použití usePathname pro získání aktuální cesty

const Breadcrumbs = () => {
    const pathname = usePathname(); // Získání aktuální cesty

    // Rozdělení pathname na segmenty (po `/`)
    const pathSegments = pathname
        .split("/")
        .filter((segment) => segment !== ""); // Odstraní prázdné segmenty

    // Vytvoření breadcrumb položek
    const breadcrumbs = pathSegments.map((segment, index) => {
        // Vytváření href pro každý segment
        const href = "/" + pathSegments.slice(0, index + 1).join("/");
        return { label: segment, href };
    });

    return (
        <div {...stylex.props(styles.wrapper)}>
            {breadcrumbs.map((breadcrumb, index) => (
                <div key={index} {...stylex.props(styles.breadcrumb)}>
                    <a href={breadcrumb.href}>{breadcrumb.label}</a>
                    {index < breadcrumbs.length - 1 && " / "}
                </div>
            ))}
        </div>
    );
};

export default Breadcrumbs;
