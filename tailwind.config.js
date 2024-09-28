/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'color':'#902371',
      },
      backgroundImage: {
        'hero-pattern': "url('/image/Lines.png')",
      }
    },
  },
  plugins: [],
}