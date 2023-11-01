const pension_act = {
	primary: '#FF5369',
	'primary-focus': '#FF8993',
	secondary: '#394494',
	'secondary-focus': '#5F81C6',
	accent: '#1A26EA',
	'accent-focus': '#121BA6',
	neutral: '#1D1F43',
	'base-100': '#FFFFFF',
	'base-200': '#FFF1EE',
	'base-300': '#FFD3C9',
	info: '#ABC4FB',
};

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: pension_act,
		fontFamily: {
			sans: 'IBM Plex Sans Thai, sans-serif',
			looped: 'IBM Plex Sans Thai Looped, sans-serif',
			minimal: 'FC Minimal, serif',
		},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				pension_act,
			},
		],
	},
};
