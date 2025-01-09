// ( Neves Team Project )
// ===============================================================
// You are now in the programming file, design section page
// ===============================================================


let myArray = ["Pictures/p2.png", "Pictures/p3.png", "Pictures/p4.png"]
let buttons = document.querySelectorAll("main div.box-content button");
let indexA = 0;
let img =  document.querySelector("main div.box-content img");
console.log(myArray[0])

buttons.forEach((element, index) => {
   element.addEventListener("click", () => {
    if (index === 0) {
        indexA++;
        if (indexA === 1) {
           img.src = myArray[0]
        } else if (indexA  === 2) {
            img.src = myArray[1]
        } else if (indexA  ===3) {
            img.src = myArray[2]
        }

    } else {
        indexA--;
       if (indexA === 0) {
        img.src = img.src;
       } else if (indexA === -1) {
         img.src = myArray[2];
       }  else if (indexA === -2) {
        img.src = myArray[1];
      }else if (indexA === -3) {
        img.src = myArray[0];
      }

    }
   })
});
