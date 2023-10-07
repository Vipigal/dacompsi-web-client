/** @type {import('tailwindcss').Config} */
export default {
  content: [
		"./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
	],
  theme: {
    extend: {
			colors: {
				'red-default': '#233333'
			}
		},
  },
  plugins: [],
}

