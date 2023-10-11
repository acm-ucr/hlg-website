/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        hlg: {
          gray: "#F2F3F8",
          white: "#FFFFFF",
          yellow: "#FFB703",
          orange: "#FB8500",
          "blue-100": "#8ECAE6",
          "blue-200": "#1B76FF",
          "blue-300": "#294C6D",
          black: "#15131E",
          green: "#BBFFA3",
          teal: "#41FFE8",
          pink: "#F14AFF",
          purple: "#8103FF",
        },
      },
    },
  },
  plugins: [],
};
