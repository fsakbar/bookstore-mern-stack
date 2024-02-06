/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#7F27FF',
        'secondary': '#9F70FD'
      }

    },
  },
  plugins: [],
}

