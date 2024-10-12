import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'
import Footer from './components/Footer';
import Logo from './components/Logo'; 
import Head from './components/Head'; 

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
  	themeSwitch: {
		useOptions() {
			return {
				light: 'Světlý',
				dark: 'Tmavý',
				system: 'Systém'
			}
		}
	},
	//docsRepositoryBase: 'https://github.com/ruciloss/ruciloss.github.io/tree/main/docs',
	darkMode: true,
	color: {
		hue: 212,
		saturation: 100
	},
	logo,
	search: {
		placeholder: 'Najdi cokoliv...',
		//loading: 'Načítání..',
		//error: 'Error',
		//emptyResult: 'Nic nebylo nalezeno.',
		component: null
  	},
	project: {
		//link: 'https://github.com/ruciloss/ruciloss.github.io/'
  	},
	chat: {
		//link: 'https://discord.gg/hEM84NMkRv'
	},
	toc: {
		title: 'Na této stránce',
		backToTop: true
	},
	editLink: {
		component: null
	},
	feedback: {
		content: null
	},
	sidebar: {
		//defaultMenuCollapseLevel: 2,
	},
	gitTimestamp: null,
  	//faviconGlyph: 'R',
	head: Head, 
}
