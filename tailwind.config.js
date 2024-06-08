/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#7E22CE",
        red: "#FF274C",
      },
    },
  },
  plugins: [],
};
