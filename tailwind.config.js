module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,jsx,ts,tsx,vue}', 
    './layouts/**/*.{js,jsx,ts,tsx,vue}', 
    './components/**/*.{js,jsx,ts,tsx,vue}',
    './store/**/*.{js,jsx,ts,tsx,vue}'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'brand-bg':'#E1FFDB',
        /* 'brand':'#16E07F', */
        'brand':'#02EBBC',
      },
      screens: {
        '3xl': '1680px',
        '4xl': '1920px',
      },
      spacing:{
        '68':'17rem',
        '72':'18rem',
        '86':'21.5rem',
        '102':'25.5rem',
        '120':'30rem',
        '128':'32rem',
        '144':'36rem',
      },
      fontSize: {
        'xxxs': '0.55rem',
        'xxs': '0.65rem',
        '12xl': '6rem',
        '24xl': '12rem',
      },
      minHeight: {
        '68':'17rem',
        '72':'18rem',
        '86':'21.5rem',
        '102':'25.5rem',
        '120':'30rem',
        '128':'32rem',
        '144':'36rem',
      },
      maxWidth: {
        '68':'17rem',
        '72':'18rem',
        '76':'19rem',
        '86':'21.5rem',
        '102':'25.5rem',
        '120':'30rem',
        '128':'32rem',
        '144':'36rem',
      },
      truncate: {
          lines: {
              1: '1',
              2: '2',
              3: '3',
              4: '4',
              5: '5',
              8: '8',
          }
      },
      scale: {
        '101': '1.01',
        '102': '1.02',
        '103': '1.03',
        '102': '1.02',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-truncate-multiline')(['responsive', 'hover']),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio')
  ],
  corePlugins: {
    // ...
   rotate: true,
  }
}
