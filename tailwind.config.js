module.exports = {
  corePlugins: {
    preflight: false,
  },
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '100px': '100px',
        '50px': '50px',
        '490px': '490px',
      },
      colors: {
        black: {
          a: '#17181A',
          b: '#171819',
          c: '#333',
        },
        blue: '#5E79FF',
        'blue-light': '#C4CEFF',
      },
      backgroundImage: {
        'home-banner': "url('/src/assets/img/home-banner.png')",
        'nav-icon-1': "url('/src/assets/img/nav-menu-icon1.png')",
        'nav-icon-2': "url('/src/assets/img/nav-menu-icon2.png')",
        'nav-icon-3': "url('/src/assets/img/nav-menu-icon3.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
