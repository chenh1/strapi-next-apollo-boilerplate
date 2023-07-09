/** @type {import('tailwindcss').Config} */
module.exports = {
  //purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
    "./storybook/**/*.{js,ts,jsx,tsx,html}",
    "./public/**/*.{js,ts,jsx,tsx,html}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
