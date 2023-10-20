/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
    },
    extend: {
      width: {
        1.5: '10px',
      },
      padding: {
        3.5: '14px',
      },
      gridTemplateColumns: {
        app: '14rem 1fr',
      },
      colors: {
        'primary-light': '#FFF0F7',
        content: '#101828',
        screen: '#F2F4F7',
        tertiary: '#667085',
        'shape-secondary': '#EAECF0',
        secondary: '#475467',
        success: '#C2ED79',

        razzmatazz: {
          700: '#d0005e',
          900: '#920945',
        },
      },
    },
  },
  plugins: [],
}
