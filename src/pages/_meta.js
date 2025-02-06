export default {
	index: {
		title: ' ',
		type: 'page',
		theme: {
			layout: 'full',
			breadcrumb: true,
			footer: true,
			navbar: true,
			pagination: true,
			sidebar: true,
			toc: true
		}
	},
	docs: {
		type: 'page',
		title: 'Documentation',
		href: '/get-started'
	},
	'#': {
		type: 'separator',
		title: 'Get Started' 
	},
	'get-started': 'Installation',
	'##': {
		type: 'separator',
		title: 'Projects'
	},
	'bootstrap-theme-toggler': 'Bootstrap Theme Toggler',
	sliderjs: 'SliderJS',
	'###': {
		type: 'separator',
		title: 'Resources'
	},
	license: 'License',
	legal: 'Legal'
}
