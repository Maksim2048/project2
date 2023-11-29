let elem = document.querySelector(".theme");
elem.onchange = function () {
  if (this.checked) {
    theme.setAttribute("href", "css/dark.css");
  } else {
    theme.setAttribute("href", "css/light.css");
  }
};

let elem1 = document.querySelector(".registr");
let elem2 = document.querySelector(".fura");
elem2.hidden = true;
elem1.addEventListener("click", () => {
  elem2.hidden = false;
  elem1.after(elem2);
});

let inp = document.querySelectorAll(".input");
if (inp == true) {
  let elem3 = document.getElementById("sub");
  elem3.addEventListener("click", () => {
    if (elem2.hidden == false) {
      elem2.hidden = true;
    }
  });
}

// let elem4 = document.querySelector(".forma");
// elem4.addEventListener("submit");
// , function (num) {
//   num.preventDefault();
//   console.log("successfull");
// });
