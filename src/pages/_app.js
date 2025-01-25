import '../../globals.css';
import CookieConsent from '../components/ThirdParty/CookieConsent';
import GoogleAnalytics from '../components/ThirdParty/GoogleAnalytics';

export default function App({ Component, pageProps }) {
	return (
		<>
            <GoogleAnalytics id="G-S31SJ8KPDK" />
			<Component {...pageProps} />
			<CookieConsent />
		</>
	);
}
