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
        titleColor:'#232529',
        secondary2:'#A3C5FF',
        black: '#232529'
    },
    container: {
      screens: {
        // sm: '750px',
        // md: '820px',
        // lg: '984px',
        xl: '1200px',
      }
    },
    gridTemplateColumns: {
      'header': 'min-content 1fr',
      'header-large': '1fr 1fr min-content'
    }
  },
  plugins: [],
}
}