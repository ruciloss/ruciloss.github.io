import { useRouter } from 'next/router';
import { useConfig } from 'nextra-theme-docs';

const Head = () => {
    const config = useConfig();
    const { asPath } = useRouter();

    const titleSuffix = 'Češtiny a překlady videoher | Ruciloss';
    const title = asPath !== '/' ? `${config.title} – ${titleSuffix}` : titleSuffix;
    const description = config.frontMatter.description || 'Češtiny a překlady videoher';
    const url = 'https://ruciloss.github.io';
    const image = config.frontMatter.image || `${url}/og.png`;
    const imageX = config.frontMatter.image || `${url}/twitter.png`;

    return (
        <>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="apple-mobile-web-app-title" content={title} />

            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@ruciloss" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={imageX} />
            <meta name="twitter:url" content={url} />

            <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
            <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <meta name="msapplication-TileColor" content="#fff" />
            <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
            <link rel="manifest" href="/manifest.json" />
        </>
    );
};

export default Head;
