/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "beeliz-dark-blue": "#120659",
        "beeliz-yellow": "#f8ed82",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Adding Inter as the default sans-serif font
        title: ["Poppins", "sans-serif"], // Adding Poppins as a title font
      },
    },
  },
  plugins: [],
};
