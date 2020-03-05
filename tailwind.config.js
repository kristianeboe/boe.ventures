/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        bvBlack: '#000',
        bvWhite: '#fff',
        bvBlue: '#0197F6',
        bvRed: '#D7263D',
        bvSteelBlue: '#448FA3'
      }
    }
  },
  variants: {},
  plugins: [require('@tailwindcss/ui')]
}
