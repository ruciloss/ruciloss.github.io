import * as stylex from "@stylexjs/stylex";
import { styles } from "./Breadcrumbs.stylex";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

const Breadcrumbs = () => {
    const pathname = usePathname();

    const pathSegments = pathname
        .split("/")
        .filter((segment) => segment !== "");

    const breadcrumbs = [
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
