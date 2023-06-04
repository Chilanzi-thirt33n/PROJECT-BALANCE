/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        myWhite: "#F5F5F5",
        myGreen: "#86BC42",
        myDarkestGreen: "#1A2223",
        myDarkGreen: "#283739",
        myGray: "#7c7c7c",
        myDarkOrange: "#F2B6A5",
        myLightOrange: "#ffead4",
        myEmGreen: "#D5e6ab",
        myBgGreen: "#629672",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};

