/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        txtColor: '#935387', // Custom text color
        bgColor: '#abcdef', // Custom background color
      },
      
    },
  },
  plugins: [],
}

