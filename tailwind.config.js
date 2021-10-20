/* eslint-disable no-undef */
module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
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
