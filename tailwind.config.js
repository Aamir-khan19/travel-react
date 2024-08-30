/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      screens: {
        xs: "428px",
      },
    },
    fontFamily: {
      "mukta-regular": ["Mukta", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      "dm-sans": ["DM Sans", "sans-serif"],
    },
  },
  plugins: [],
};
