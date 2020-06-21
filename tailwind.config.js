const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["SpaceGrotesk", "Inter var", ...defaultTheme.fontFamily.sans],
        // sans: ["Inter var", ...defaultTheme.fontFamily.sans]
      },
      spacing: {
        "80": "20rem",
        "96": "24rem",
        "112": "28rem",
        "128": "32rem",
        "152": "40rem",
      },
    },
  },
  variants: {
    height: ["responsive", "hover", "focus"],
  },
  plugins: [
    require("@tailwindcss/ui")({ layout: "sidebar" }),
    require("autoprefixer"),
  ],
};
