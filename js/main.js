const menu= document.querySelector(".menu");
const work = document.querySelector(".menu__item--work");
const workList = document.querySelector(".work-list");

let state = false;

work.addEventListener("click", toggle);


function toggle() {
  if(!state) {
    workList.classList.add("active");
    menu.classList.add("active");
    state = true;
  } else {
    workList.classList.remove("active");
    menu.classList.remove("active");
    state = false;
  }
}

