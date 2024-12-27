/* Neves Team Project */



// You are now in a special file in Header and js extension.





// Variables
let header = document.querySelector("header");
let lastScrollTop = 0;
let btnMenu = document.getElementById("btn-menu");
let boxMenu = document.getElementById("box-menu");

// Job For Header => Add actve class when scroll is greater than 500
window.addEventListener("scroll", () => {
  if (window.scrollY >= 500) {
    header.classList.add("black-fog");
  } else {
    header.classList.remove("black-fog");
  };
  // console.log(this.scrollY);
});

window.addEventListener("scroll", () => {
  let scrollY = window.scrollY;
  // Responsive condition
  if (window.innerWidth >= 1200) {
    // scrollY condition
    if (scrollY > 500) {
      // Job For Heade => When it goes up, it adds an active class, and when it goes down, it removes an active class.
      let currentScrollTop = window.scrollY;
      if (currentScrollTop > lastScrollTop) {
        header.classList.add("up-down");
      } else {
        header.classList.remove("up-down");
      };
      lastScrollTop = currentScrollTop;
    } else {
      header.classList.add("up-down");
    };
  } else {
    header.classList.add("up-down");
  };
});

// Job menu => When you press the menu button, the menu opens.
btnMenu.addEventListener("click", () => {
  boxMenu.classList.toggle("active");
});