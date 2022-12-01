/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#151515',
				secondary: '#4ee1a0',
				'neutral-dark': '#242424',
				'neutral-light': '#d9d9d9',
			},
		},
	},
	plugins: [],
};
