/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				codeforall: {
					primary: '#2E3283',
					'primary-focus': '#4349BA',
					secondary: '#2BB25C',
					'secondary-focus': '#35D26E',
					accent: '#8054FF',
					'accent-focus': '#5929E3',
					neutral: '#000000',
					'base-100': '#FFFFFF',
					'base-300': '#E5E6E6',
					info: '#F8EB54',
				},
			},
		],
	},
};
