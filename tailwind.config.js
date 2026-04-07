/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'aliff-black': '#0a0a0a',
        'aliff-gold': '#bc9c22',
        'aliff-offwhite': '#faf9f6',
        'aliff-sand': '#eae1d1',
      },
    },
  },
  plugins: [],
}