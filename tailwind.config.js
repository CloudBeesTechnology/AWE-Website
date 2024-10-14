/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "#303030",
      white: "#ffffff",
      litegrey: "#D0D0D0",
      grey:"#959595",
      yellow:"#FEF563",
      darkyellow:"FEF116",
      dark_red:"#7F0000",
      light_yellow:"#FFF4A5"
    },
   
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        minionPro: ['font-family: minion-pro, serif'],
        crimson: ['"Crimson Pro"', 'serif'],
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
