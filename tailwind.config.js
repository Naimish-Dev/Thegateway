/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        slg: "950px",
      },
    },
  },
  plugins: [],
};
// <uniquifier>: Use a unique and descriptive class name
// <weight>: Use a value from 100 to 70