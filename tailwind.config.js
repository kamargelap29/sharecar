const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  content: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  theme: {
    fontFamily: {
      sans: ["Poppins", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        "sc-green": "#8CC14E",
        "sc-dark": "#333333",
        "sc-light": "#FCFCFC",
        "sc-blue": "#3574BA",
        "sc-grey": "#565656",
      },
      backgroundImage: {
        carVector: `url('/assets/images/Car.svg')`,
        cityVector: `url('/assets/images/City.svg')`,
        humanVector: `url('/assets/images/human.svg')`,
        gardientSvg: `url('/assets/images/gradient-shape/benefit-shape.webp')`,
        gardientFooterSvg: `url('/assets/images/gradient-shape/footer-shape.webp')`,
      },
      animation: {
        runProgress: "runProgress 5s linear",
      },
      keyframes: {
        runProgress: {
          "0%": {
            width: "0",
          },

          "100%": {
            width: "100%",
          },
        },
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/aspect-ratio")],
  daisyui: {
    prefix: "",
  },
};
