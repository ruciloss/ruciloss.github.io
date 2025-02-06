import Link from 'next/link';
import SocialIcon from '../Content/SocialIcon';

export default function Footer() {
	return (
		<div className="relative w-full z-10">
			<div className="flex items-center flex-wrap gap-2">
				<Link className="text-sm hover:text-blue-700" href="/legal/privacy">Legal</Link>
				<span>•</span>
				<Link className="text-sm hover:text-blue-700" href="/license/mit">License</Link>
				<span>•</span> 
				<span id="footer-links" className="text-sm"></span>
			</div> 
			<p className="text-sm mt-4">Ruciloss &copy; {new Date().getFullYear()}</p>
		</div>
	);
}
