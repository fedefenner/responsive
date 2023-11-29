var navBtns = document.querySelectorAll(".nav-btns li a");
var list = document.getElementById("nav-btns");
var listbtn = document.querySelector(".checkbtn");

var size = window.innerWidth;
var flag = false;

window.addEventListener("resize", () => {
  list.style.left = "200%";
  size = window.innerWidth;
  flag = false;
  console.log(flag);
});

if (window.innerWidth < 881) {

  for (var i = 0; i < navBtns.length; i++) {
    navBtns[i].addEventListener("click", () => {
      list.style.left = size + "px";
      flag = false;
      console.log(flag);
    });
  }

  function buttons() {
    if (flag) {
      flag = false;
      list.style.left = size + "px";
      console.log(flag);
    } else {
      flag = true;
      list.style.left = size - 160 + "px";
      console.log(flag);
    }
  }
}
