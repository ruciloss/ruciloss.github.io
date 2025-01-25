import React from 'react';
import dynamic from 'next/dynamic';
import PackageStats from './PackageStats';
import { FaWindows } from 'react-icons/fa';

const LazyYouTube = dynamic(() =>
    import('react').then((mod) => ({
        default: ({ videoId, title }) => (
            <iframe
                src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1`}
                title={title}
                frameBorder="0"
                className="w-full h-40 md:h-64"
                allow="fullscreen"
            />
        ),
    })),
    {
        ssr: false,
        loading: () => <div className="w-full h-40 md:h-64" />, 
    }
);

export default ({
    videoId,
    title,
    description,
    downloadUrl,
    version,
    releaseDate,
    packageStatsUrl,
    bulletPoints,
}) => (
    <div className="bg-white dark:bg-neutral-900 flex flex-col md:flex-row border dark:border-neutral-800">
        <div className="relative w-full md:w-2/3">
            <LazyYouTube videoId={videoId} title={title} />
        </div>
        <div className="flex flex-col w-full">
            <div className="flex-1 py-2 md:py-0 px-6 pr-4 flex flex-col md:flex-row justify-between border-b dark:border-neutral-800">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center w-full">
                    <div>
                        <p className="font-medium text-2xl tracking-tight text-slate-900 dark:text-slate-100 text-left">
                            {title}
                        </p>
                        <p className="text-gray-500 dark:text-gray-400 text-left">{description}</p>
                    </div>
                    <div>
                        <a
                            href={downloadUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded px-4 py-2 text-sm mt-4 md:mt-0 font-medium bg-blue-700 hover:bg-blue-600 text-white transition duration-300 ease-in-out flex items-center justify-center whitespace-nowrap w-full"
                        >
                            <FaWindows className="mr-2" />
                            Stáhnout češtinu
                        </a>
                        <span className="text-sm text-right text-gray-500 dark:text-gray-400">
                            v{version}
                        </span>
                    </div>
                </div>
            </div>
            <div className="py-8 px-6 pr-4">
                {bulletPoints && bulletPoints.length > 0 && (
                    <ul className="grid grid-cols-2 gap-2">
                        {bulletPoints.map((point, index) => (
                            <li key={index} className="flex items-center text-sm">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                    className="w-4 h-4 text-green-500 mr-2"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                                    />
                                </svg>
                                {point}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div className="flex items-center py-2 px-6 pr-4 justify-between">
                <PackageStats url={packageStatsUrl} />
                <p className="text-sm text-gray-500">Vydáno: {releaseDate}</p>
            </div>
        </div>
    </div>
);
