/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.tsx", "./src/components/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        main: {
          1: "#181822",
          2: "#d4b4fd",
          3: "#eb643e",
          4: "#bfffe3",
          6: "#beb2b1",
          7: "#3d3c40",
          71: "#313133",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
