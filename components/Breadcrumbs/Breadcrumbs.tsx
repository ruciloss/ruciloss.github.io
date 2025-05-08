import * as stylex from "@stylexjs/stylex";
import { styles } from "./Breadcrumbs.stylex";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

const Breadcrumbs = () => {
    const pathname = usePathname();

    // Skryj breadcrumbs na hlavní stránce
    if (pathname === "/") return null;

    // Skryj breadcrumbs na not-found nebo jiných speciálních cestách (např. 404, 500)
    const isErrorPage =
        pathname.startsWith("/404") ||
        pathname.startsWith("/not-found") ||
        pathname.startsWith("/500");
    if (isErrorPage) return null;

    const pathSegments = pathname
        .split("/")
        .filter((segment) => segment !== "");

    const breadcrumbs = [
        { label: "Home", href: "/" },
        ...pathSegments.map((segment, index) => {
            const href = "/" + pathSegments.slice(0, index + 1).join("/");
            return { label: segment, href };
        }),
    ];

    return (
        <div role="navigation" {...stylex.props(styles.wrapper)}>
            {breadcrumbs.map((breadcrumb, index) => (
                <React.Fragment key={index}>
                    {index < breadcrumbs.length - 1 ? (
                        <Link
                            href={breadcrumb.href}
                            {...stylex.props(styles.link)}
                        >
                            {breadcrumb.label}
                        </Link>
                    ) : (
                        <span>{breadcrumb.label}</span>
                    )}

                    {index < breadcrumbs.length - 1 && <span>&mdash;</span>}
                </React.Fragment>
            ))}
        </div>
    );
};

export default Breadcrumbs;
