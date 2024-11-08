/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				veryDarkNavy: '#0B0D17',
				lightBlue: '#d0d6f9',
				CustomWhite: '#ffffff',
			},
			fontFamily: {
				Bellefair: ['Bellefair', 'serif'],
				balowCondensed: ['Barlow Condensed', 'sans-serif'],
				balowRegular: ['BalowRegular', 'sans-serif'],
			},
			outlineWidth: {
				88: '88px',
				176: '176',
			},
			backgroundImage: {
				bgDesktopHome: 'url("/assets/home/background-home-desktop.jpg")',
				bgTabletHome: 'url("/assets/home/background-home-tablet.jpg")',
				bgMobileHome: 'url("/assets/home/background-home-mobile.jpg")',
			},
			lineHeight: {
				'extra-loose': '2.5',
				custom: '2.2',
			},
		},
	},
	plugins: [],
};
