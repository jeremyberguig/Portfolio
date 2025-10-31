document.addEventListener("DOMContentLoaded", function () {
  // Sélectionne tous les éléments avec la classe "scroll-item" pour le comportement de défilement
  document.querySelectorAll(".scroll-item").forEach(function (item) {
    item.addEventListener("click", function () {
      item.scrollIntoView({ block: "center", behavior: "smooth" });
    });
  });
});
