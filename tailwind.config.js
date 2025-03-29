/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{jsx,tsx,ts,js}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["poppins, sans"],
      },
      colors: {
        primary: "#252525",
        secondary: "white",
      },
    },
  },
  plugins: [],
};
