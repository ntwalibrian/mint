/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        darkBlue : "#0052CC",
        lightBlue : "#F0F6FF",
        lightGrey : "#002966"
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

