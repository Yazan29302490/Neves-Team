
let buttons = document.querySelectorAll("main button");
let videos = document.querySelectorAll("div.box-videos img");
let indexV = 0;


buttons.forEach((Buttons, index) => {
  Buttons.addEventListener("click", () => {
    videos.forEach(Video => {
      Video.classList.remove("active")
    });
    indexV++;
    if (indexV >= videos.length) {
      indexV = 0;
    };
    videos[indexV].classList.add("active");
  });
});
