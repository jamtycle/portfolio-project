/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './views/**/*.{pug,html,js}',
    './node_modules/flowbite/**/*.js'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'animate-ping-less': 'animate-ping 1s ease-in-out infinite',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

