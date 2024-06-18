/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.js'],
	theme: {
		extend: {
			colors: {
				beige: {
					light: '#fcf3e8',
					DEFAULT: '#e6d2bb',
					dark: '#b3a494',
				},
				maple: {
					light: '#b0a7a8',
					DEFAULT: '#a69799',
					dark: '#69585a',
				},

			},
		},
		variants: {
			extend: {
				backgroundColor: ['dark', 'darkHover'],
			},
		},
	},
	plugins: [],
}

