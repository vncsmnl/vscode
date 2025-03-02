/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      app: 'linear-gradient(to left, #f5f7fa, #c3cfe2)'
    },
    gridTemplateRows: {
      layout: '2rem 1fr 1.5rem',
    },
    gridTemplateColumns: {
      editor: '3.5rem 16rem 1fr'
    }
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
