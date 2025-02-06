import Footer from './components/Layout/Footer';
import Logo from './components/Content/Logo'; 
import Head from './components/Core/Head'; 

const logo = <Logo />;

/* eslint sort-keys: error */
/**
 * @type {import('nextra-theme-docs').DocsThemeConfig}
 */
export default {
	/*
	banner: {
			dismissible: true,  
			key: '1.0-release',
			content: (
			<a href="/">
				🎉 Frostpunk 2 Čeština • Ke stažení zde →
			</a>
			)
		},
	*/
  	logo,
	footer: {
		content: (
			<Footer />
		)
	},
	docsRepositoryBase: 'https://github.com/ruciloss/ruciloss.github.io/tree/main/docs',
	darkMode: true,
	color: {
		hue: 212,
		saturation: 100
	},
	logo,
	project: {
		link: 'https://github.com/ruciloss/ruciloss.github.io/'
  	},
	chat: {
		//link: 'https://discord.gg/hEM84NMkRv'
	},
	toc: {
		backToTop: true
	},
	sidebar: {
		//defaultMenuCollapseLevel: 2,
	},
	gitTimestamp: null,
  	//faviconGlyph: 'R',
	head: Head, 
}
