/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	presets: [require('nativewind/preset')],
	theme: {
		colors: {
			primary: '#7D5CFF',
			secondary: '#5AC68C',
			background: '#FFF9F3',
			white: '#fff',
			black: '#000',
			transparent: 'transparent',
		},
		extend: {},
	},
	plugins: [],
};
