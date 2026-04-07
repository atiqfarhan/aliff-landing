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
        'aliff-gold': '#d4af37',
        'aliff-cream': '#f5f1e6',
        'aliff-navy': '#1a1a2e',
        'aliff-sand': '#e6d5b8',
      },
    },
  },
  plugins: [],
}