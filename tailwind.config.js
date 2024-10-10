/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"bg-gray": "var(--bg-gray)",
				"foundation-blackblack-100": "var(--foundation-blackblack-100)",
				"foundation-blackblack-200": "var(--foundation-blackblack-200)",
				"foundation-blackblack-300": "var(--foundation-blackblack-300)",
				"foundation-blackblack-400": "var(--foundation-blackblack-400)",
				"foundation-blackblack-50": "var(--foundation-blackblack-50)",
				"foundation-blackblack-500": "var(--foundation-blackblack-500)",
				"foundation-blackblack-600": "var(--foundation-blackblack-600)",
				"foundation-blackblack-700": "var(--foundation-blackblack-700)",
				"foundation-blackblack-800": "var(--foundation-blackblack-800)",
				"foundation-blackblack-900": "var(--foundation-blackblack-900)",
				"foundation-orangeorange-100": "var(--foundation-orangeorange-100)",
				"foundation-orangeorange-200": "var(--foundation-orangeorange-200)",
				"foundation-orangeorange-300": "var(--foundation-orangeorange-300)",
				"foundation-orangeorange-400": "var(--foundation-orangeorange-400)",
				"foundation-orangeorange-50": "var(--foundation-orangeorange-50)",
				"foundation-orangeorange-500": "var(--foundation-orangeorange-500)",
				"foundation-orangeorange-600": "var(--foundation-orangeorange-600)",
				"foundation-orangeorange-700": "var(--foundation-orangeorange-700)",
				"foundation-orangeorange-800": "var(--foundation-orangeorange-800)",
				"foundation-orangeorange-900": "var(--foundation-orangeorange-900)",
				"main-color": "var(--main-color)",
			},
			fontFamily: {
				"h2-65": "var(--h2-65-font-family)",
				"h3-32": "var(--h3-32-font-family)",
				"main-heading-h1": "var(--main-heading-h1-font-family)",
				"nav-bar-text-21": "var(--nav-bar-text-21-font-family)",
				"small-heading-24": "var(--small-heading-24-font-family)",
			},
		},
		plugins: [import("daisyui")],
		daisyui: {
			themes: ["light", "dark"],
		},
	},
};
