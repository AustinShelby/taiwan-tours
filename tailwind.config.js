/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        jakarta: ["var(--font-jakarta)"],
      },
      colors: {
        main: "#0F1422",
        secondary: "#DE9C07",
        tertiary: "#525150",
        "main-alt": "#0F1C43",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
