/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      content: {
        'summary' : 'url("/image/rtn1.svg")',
      },
      fontFamily: {
        mulish: ['var(--font-body)'],
        abril: ['var(--font-abril)']
      },
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        titleColor:'var(--title-color)',
        secondary2:'var(--third)',
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
    },
    spacing: {
      'sixty' : '60%',
      '2/4' : '50%'
    },
    gridTemplateRows: {
      'articles': '250px min-content'
    }
  },
  plugins: [],
}
}