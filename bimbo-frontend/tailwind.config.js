module.exports = {
  content: ["./src/**/*.{html,js}"],

  theme: {
    extend: {
      colors: {
        primary: "#F86108",
        secondary: "#021732",
        text: "#556476",
      },
      fontFamily: {
        sans: ["Work Sans", "sans-serif"],
      },
      spacing: {
        1: "4px",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
};
