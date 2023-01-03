/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mulish: ['Mulish', 'sans-serif'],
        abril: ['Abril Fatface', 'cursive']
      },
      colors: {
        primary: '#3E7FF6',
        secondary: '#E5EFFE',
        titleColor:'#232529'
    },
  },
  plugins: [],
}
}