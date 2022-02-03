module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    fontFamily: {
      header: ["'Marko One'", "sans-serif"],
      body: ["Rubik", "sans-serif"],
    },
    extend: {
      spacing: {
        112: "37rem",
      },
      colors: {
        slate: "#333",
      },
      gridTemplateColumns: {
        exec: "repeat(auto-fill,minmax(400px, 1fr))",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
