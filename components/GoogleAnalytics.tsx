import React from "react";
import Script from "next/script";

export default function GoogleAnalytics({ id }: { id: string }) {
    return (
        <>
            <Script
                strategy="lazyOnload"
                src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
            />

            <Script id="" strategy="lazyOnload">
                {`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', '${id}', {
					page_path: window.location.pathname,
					});
				`}
            </Script>
        </>
    );
}
