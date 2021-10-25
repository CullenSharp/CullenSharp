/* eslint-disable no-undef */
module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			color: {
				transparent: 'transparent',
				current: 'currentColor',
				'primary': '#17931A',
				'mid-grey': '#C9C9C9',
				'light': '#F4F8EE',
				'dark': '#011A00',
				'body-dark': '#FDFDFD',
				'body-light': '#131313',
				'hyperlink-dark': '#3ED23B',
				'hyperlink-light': '#316334',
			},
			fontFamily: {
				'display': ['Sporting Grotesque Bold'],
				'body': ['IBM Plex Sans Light']
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
