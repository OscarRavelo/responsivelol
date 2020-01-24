const btn = document.querySelector(".x");
const nav = document.querySelector(".nav");
const lis = document.querySelectorAll(".li");
console.log(lis);

let show = false;

btn.addEventListener("click", e => {
  if (!show) {
    lis.forEach(li => {
      li.classList.add("open");
    });
    document.querySelector(".x").classList.add("open");
    nav.classList.add("open");

    show = true;
  } else {
    btn.classList.remove("open");
    nav.classList.remove("open");
    lis.forEach(li => {
      li.classList.remove("open");
    });
    show = false;
  }
});
