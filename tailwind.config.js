const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["gangstergrotesk", "Inter var", ...defaultTheme.fontFamily.sans],
        title: ["SpaceGrotesk"],
        // sans: ["Inter var", ...defaultTheme.fontFamily.sans]
      },
      spacing: {
        "80": "20rem",
        "96": "24rem",
        "112": "28rem",
        "128": "32rem",
        "152": "40rem",
      },
      opacity: {
        "85": "0.8",
        "90": "0.9",
        "95": "0.95",
      },
      fontSize: {
        "7xl": "5rem",
        "8xl": "6rem",
        "9xl": "8rem",
        "10xl": "11rem",
      },
    },
  },
  variants: {
    height: ["responsive", "hover", "focus"],
  },
  plugins: [
    require("@tailwindcss/ui")({ layout: "sidebar" }),
    require("autoprefixer"),
    require("@tailwindcss/typography"),
  ],
};
