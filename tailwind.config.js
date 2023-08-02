/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        blue: "#003153",
        gray: "#e6e6e9",
        shadow: "rgba(0, 0, 0, 0.5)",
      },
      fontFamily: {
        sans: ["Noto Sans", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
};
