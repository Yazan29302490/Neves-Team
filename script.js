// Neves Team Project



// You are now on the Home page





// Variables
let contentBoxsS1 = document.querySelectorAll("section.section-1 div.box-content");
let featuresS2 = document.querySelectorAll("section.section-2 div.box-content div.box-features");
let imgesS2 = document.querySelectorAll("section.section-2 div.box-content div.box-imge");
let allImgesFromS1 = document.querySelectorAll("section.section-2 img");
let contentBoxsS3 = document.querySelectorAll("section.section-3 div.box-content");

if (contentBoxsS1.length > 0) {
  animationPage();
};

function animationPage() {
  if (window.scrollY > 500) {
    contentBoxsS1.forEach((element, index) => {
      if (window.innerWidth < 900) {
        element.style.animation = `box-content ${0.4 + index * 0.1}s forwards ease`;
      } else {
        element.style.animation = "box-content 1s forwards ease";
      };
    });
  };
  if (window.scrollY > 1200) {
    featuresS2.forEach(element => {
      element.style.animation = "s2-right 1s forwards ease";
    });
    imgesS2.forEach(element => {
      element.style.animation = "s2-left 1s forwards ease";
    });
  };
  if (window.scrollY > 1900) {
    contentBoxsS3.forEach((element, index) => {
      element.style.animation = "s2-right 1s forwards ease";
      if (index === 1) {
        element.style.animation = "s2-left 1s forwards ease";
      }
    });
  };
};

window.addEventListener("scroll", () => {
  console.log(this.scrollY);
  
  animationPage();
});

window.addEventListener("DOMContentLoaded", () => {
  allImgesFromS1.forEach(element => {
    element.addEventListener("mousemove", (event) => {
      let rect = element.getBoundingClientRect();
      let x = event.clientX - rect.left;
      let y = event.clientY - rect.top;
      element.classList.remove("top-right", "top-left", "bottom-right", "bottom-left");
      if (x >= rect.width / 2 && y < rect.height / 2) {
        element.classList.add("top-right");
      } else if (x < rect.width / 2 && y < rect.height / 2) {
        element.classList.add("top-left");
      } else if (x >= rect.width / 2 && y >= rect.height / 2) {
        element.classList.add("bottom-right");
      } else if (x < rect.width / 2 && y >= rect.height / 2) {
        element.classList.add("bottom-left");
      };
    });
    element.addEventListener("mouseleave", () => {
      element.classList.remove("top-right", "top-left", "bottom-right", "bottom-left");
    });
  });
});

