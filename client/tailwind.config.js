/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          50: '#e0c9a6',
          100: '#f3dfc1',
          200: '#f3cea1',
          300: '#e0c9a6',
          400: '#1a1c1a',
        },
      },
    },
  },
  plugins: [],
}

