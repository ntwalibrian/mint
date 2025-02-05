/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#0052CC",
        lightBlue: "#F0F6FF",
        lightGrey: "#002966",
      },
    },
  },
  plugins: [],
};
