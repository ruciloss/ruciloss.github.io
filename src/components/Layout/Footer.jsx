import Link from 'next/link';
import SocialIcon from '../Content/SocialIcon';

export default function Footer() {
	return (
		<div className="relative w-full z-10">
			<div className="flex items-center flex-wrap gap-2">
				<Link className="text-sm hover:text-blue-700" href="/privacy">Soukromí</Link>
				<span>•</span>
				<span id="footer-links" className="text-sm"></span>
			</div> 
			<div className="flex items-center space-x-4 mt-4">
				<SocialIcon url="https://www.youtube.com/@ruciloss" />
				<SocialIcon url="https://www.twitch.tv/ruciloss" />
			</div>
			<p className="text-sm mt-4">Ruciloss &copy; 2016 - {new Date().getFullYear()}</p>
		</div>
	);
}
