/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#191919',
        secondary: '#202020',
        text: '#5f5f5f',
        divider: '#2c2c2c',
        hover: {
          primary: '#262626'
        }
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%'
      }
    }
  },
  plugins: []
}
