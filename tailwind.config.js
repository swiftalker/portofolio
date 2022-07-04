const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
      './layouts/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
      extend: {
          fontFamily: {
            sans: ['Inter', ...defaultTheme.fontFamily.sans]
          },
          
          backgroundImage: theme => ({
              'wave-1': "url('/images/wave-1.png')",
              'skills': "url('/images/tiny-grid.svg')",
          }),

          colors: {
              primary: "#214ECF",
              primary_light: "#bbd2ff",
              secondary: "#C7FF84",
              secondary_light: "#E5FEC7",
              secondary_dark: "#394726",
          },
          screens: {
              dark: {raw: "(prefers-color-scheme: dark)"},
          },
          fontSize: {
              "1xl": "1.35rem",
              "2_5xl": "1.65rem",
          }, spacing: {
              "44": "11rem",
              "60": "15rem",
          },
          letterSpacing: {
              widy: "0.010em",
          },
          container: {
              center: true
          }
      },
  },
  variants: {
      extend: {},
  },
  plugins: [
      require('@tailwindcss/typography'),
      require('tailwindcss-font-inter')
  ],
}
