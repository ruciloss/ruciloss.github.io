import Link from 'next/link';

export default function Footer() {
	return (
		<div className="w-full">
			<div className="flex items-center flex-wrap gap-2">
				<Link className="text-sm hover:text-blue-700" href="/privacy">Soukromí</Link>
				<span>•</span>
				<span id="footer-links" className="text-sm"></span>
			</div> 
			<p className="text-sm mt-4">Ruciloss &copy; 2016 - {new Date().getFullYear()}</p>
		</div>
	);
}
