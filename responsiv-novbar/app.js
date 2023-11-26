let toogleButton = document.querySelector(".toogle-button");
let nav = document.querySelector("nav");

toogleButton.addEventListener("click", function () {
  nav.classList.toggle("active");
});
let header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("header-scroll", window.scrollY > 0);
});
