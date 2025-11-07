/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1f2937",
        secondary: "#3b82f6"
      }
    }
  },
  plugins: []
}
