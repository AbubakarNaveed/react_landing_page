/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      xsm: { max: "350px" },
      supersmall: { min: "250px", max: "400px" },
      mediumish: { min: "401px", max: "750px" },
      large: { min: "751", max: "1200px" },
      xtraLarge: "1201px",
      info: { max: "510px" },
      sm: { max: "650px" },

      smhero: { min: "651px" },
      md: { max: "799px" },
      mdburger: "625px",

      lg: { max: "1024px" },
      xl: { max: "1280px" },
      xxl: { max: "1536px" },
    },
    colors: {
      blueNav: "#394A6D",
      tealWeb: "#3C9D98",
      parrotWeb: "#52DE97",
      mintWeb: "#C0FFB3",
      whiteText: "#ffff",
      ivory: "#FFFFF0",
      cardWhite: "#f8f8f9",
      lightGray: "	#E8E8E8",
      black: "#000",
      cobalt: "#1338BE",
      arctic: "#82EEFD",
      berry: "#241571",
      gray: "#D3D3D3",
      lightBlack: "#454545",
    },
  },
  plugins: [],
};
