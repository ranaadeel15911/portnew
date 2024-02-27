import flowbite from "flowbite/plugin"
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"media",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/lib/**/*.js",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
      
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      container: {
        center: true,
        padding:"30px"
      },
      colors:{
        main: "#02AAF1",
        secondary: "#FF5733",
      },
      screens:{
        "xxsm":"400px",
        "xsm":"430px",
      }
    },
  },
  plugins: [
    // require('@tailwindcss/typography'),
    flowbite
  ],
};
