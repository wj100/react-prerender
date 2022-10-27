module.exports = {
  corePlugins: {
    // preflight: false,
  },
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '22px':'22px',
        '42px': '42px',
        '100px': '100px',
        '50px': '50px',
        '490px': '490px',
        '935px': '935px',
      },
      fontSize: {
        ssm: ['12px', '24px'],
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['20px', '24px'],
        xl: ['24px', '28px'],
        xxl: ['32px', '36px'],
        xxxl: ['42px', '48px'],
      },
      colors: {
        black: {
          a: '#17181A',
          b: '#171819',
          c: '#333333',
          d:'#A3A4AB',
          e:'#999999',
          f:'#666666'
        },
        'white-a': '#f9f9f9',
        blue: '#5E79FF',
        'blue-light': '#C4CEFF',
        'blue-dark':'#373B52',
        'blue-grey': '#C7D2E9 '
      },
      backgroundImage: {
        'home-banner': "url('/src/assets/img/home/home-banner.png')",
        'fashion-banner': "url('/src/assets/img/category/fashion-banner.png')",
        'outdoor-banner': "url('/src/assets/img/category/outdoor-banner.png')",
        'toys-banner': "url('/src/assets/img/category/toys-banner.png')",
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
