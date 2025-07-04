/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./index.html",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "apple-blue": "#007AFF",
      },
      fontFamily: {
        display: ['-apple-system', 'BlinkMacSystemFont', 'San Francisco', 'SF Pro Display', 'sans-serif'],
        sans: ['-apple-system', 'BlinkMacSystemFont', 'San Francisco', 'SF Pro Text', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
