const { toRadixVar, toRadixVars } = require("windy-radix-palette/vars");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				"hi-contrast": toRadixVar("mauve", 12),
				"lo-contrast": toRadixVar("mauve", 11),

				neutral: toRadixVars("mauve"),
			},
		},
	},
	plugins: [
		require("windy-radix-palette"),
		require("@tailwindcss/typography"),
		require("windy-radix-typography"),
	],
};
