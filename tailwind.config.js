module.exports = {
  corePlugins: {
    preflight: false,
  },
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    spacing: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '48px',
        px50:'50px'
       },
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
