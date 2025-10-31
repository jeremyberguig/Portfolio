/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html", // tous les fichiers HTML à la racine
    "./**/*.html", // tous les fichiers HTML dans les sous-dossiers
    "./**/*.js", // tous les fichiers JS (optionnel)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
