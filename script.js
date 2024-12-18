// Variables
let btnMenu = document.getElementById("btn-menu");
let boxMenu = document.getElementById("box-menu");

// Job menu
btnMenu.onclick = () => {
  boxMenu.classList.toggle("active");
};