/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        oswald: "Oswald",
        libre: "Libre Baskerville",
        bebas: "Bebas Neue",
        inter: "Inter",
        playfair: "Playfair Display",
        quick: "Quicksand",
        playFair: "Playfair Display",
        robot: "Roboto",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
