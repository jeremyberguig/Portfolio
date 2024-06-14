/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "competences.html"],
  theme: {
    extend: {},
  },
  plugins: [
    require("@catppuccin/tailwindcss")({
      prefix: "ctp",
      defaultFlavour: "latte",
    }),
  ],
};
