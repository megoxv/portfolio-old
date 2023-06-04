/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
          sans: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
          'outline': '0px 1px 6px rgba(62, 66, 101, 0.05)',
          'hover': '0px 20px 24px rgba(62, 66, 101, 0.07)',
      },
      colors: {
          'gray-25': '#F8FAFD',
          'primary-25': '#F9F5FF',
          'primary-100': '#E8DBFE',
          'primary-200': '#cfb7fd',
          'primary-300': '#B392FA',
          'primary-500': '#764AF1',
          'primary-600': '#5A36CF',
          'dark': '#1F1A37',
      },
  },
  },
  plugins: [],
}
