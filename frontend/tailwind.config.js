/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#364F6B',
        'secondary': '#3FC1C9',
        'tertiary': '#F2AFEF',
        'backgroundputih': '#F5F5F5'
      },
      textColor: {
        'primary': '#364F6B',
        'secondary': '#3FC1C9',
        'tertiary': '#F2AFEF',
        'backgroundputih': '#F5F5F5'
      }

    },
  },
  plugins: [],
}

