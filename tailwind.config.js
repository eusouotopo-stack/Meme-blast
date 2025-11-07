/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0ea5a4",
        dark: "#0f172a",
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
  }
