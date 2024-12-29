// ( Neves Team Project )
// ===============================================================
// You are now in a special file in Footer and js extension.
// ===============================================================

// Variables
let footer = document.querySelector("footer");

window.addEventListener("scroll", () => {
  if (window.scrollY > 2700) {
    footer.style.animation = "f-animation 1s forwards ease";
  };
});