/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#333333",
        "primary-light": "#666666",
        secondary: "#AAAAAA",
        "secondary-light": "##b7b7b7",
        grey: "#4a4a4a",
        "grey-light": "#777777",
        blue: "#367BF5",
      },
    },
  },
  plugins: [],
};
