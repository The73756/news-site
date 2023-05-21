/** @type {import("tailwindcss").Config} */

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["winter", "night"],
  },
  plugins: [require("daisyui")],
};
