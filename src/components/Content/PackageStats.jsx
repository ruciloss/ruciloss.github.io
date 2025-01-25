import React, { useState, useEffect } from "react";

export default function PackageStats({ url }) {
	const [downloadsGitHub, setDownloadsGitHub] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const fetchGitHubDownloads = async () => {
		try {
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error(`Error fetching GitHub data ${response.statusText}`);
			}
			const data = await response.json();
			
			const totalGitHubDownloads = data.reduce((total, release) => {
				const releaseDownloadCount = release.assets.reduce((releaseTotal, asset) => {
					return releaseTotal + asset.download_count;
				}, 0);
				return total + releaseDownloadCount;
			}, 0);

			setDownloadsGitHub(totalGitHubDownloads);
		} catch (err) {
			setError(err.message);
		}
	};

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			await fetchGitHubDownloads();
			setLoading(false);
		};

		fetchData();
	}, [url]);

	if (loading) return <p>Loading...</p>;
	if (error) return <p className="text-sm text-red-500">{error}</p>;

	return (
		<div className="relative inline-flex items-center">
			<span className="flex items-center h-3 w-3">
				<span className="animate-ping absolute inline-flex h-1.5 w-1.5 rounded-full bg-green-400 opacity-75"></span>
				<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
			</span>
			<p className="text-sm text-gray-500">
				Počet stažení: {downloadsGitHub}
			</p>
		</div>
	);
}
