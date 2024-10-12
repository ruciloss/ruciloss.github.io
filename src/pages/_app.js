import '../../globals.css';
import CookieConsent from '../components/CookieConsent';
import GoogleAnalytics from '../components/GoogleAnalytics';

export default function App({ Component, pageProps }) {
	return (
		<>
            <GoogleAnalytics id="G-S31SJ8KPDK" />
			<Component {...pageProps} />
			<CookieConsent />
		</>
	);
}
