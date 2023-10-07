/** @type {import('tailwindcss').Config} */
export default {
  content: [
		"./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
	],
  theme: {
    extend: {
			colors: {
				'red-dacompsi': '#990100',
				'gray-dacompsi': '#333333'
			}
		},
  },
  plugins: [],
}

