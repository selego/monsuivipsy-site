const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        denim: {
          0: "#F5F8FC",
          100: "#EFF6F9",
          200: "#DAE8F3",
          300: "#BFD3EC",
          400: "#92ACE2",
          500: "#6183D4",
          600: "#445EBA",
          700: "#374993",
          800: "#26387C",
          900: "#232D51",
        },
        turqoise: {
          0: "#EDF9F9",
          100: "#D3F7F6",
          200: "#A2F1EB",
          300: "#64E6E0",
          400: "#21D2CE",
          500: "#1FC6D5",
          600: "#099B99",
          700: "#0E7E7B",
          800: "#11615F",
          900: "#104E4C",
        },
        gray: colors.blueGray,
      },
      container: {
        center: true,
        screens: {
          xl: "1152px",
        },
        padding: {
          DEFAULT: "1.25rem",
        },
      },
      height: {
        max: "max-content",
      },
      padding: {
        30: "7.5rem",
      },
      fontFamily: {
        karla: ["Karla"],
      },
    },
  },
  variants: {
    extend: {},
  },
};
