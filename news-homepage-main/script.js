const btnNavEl = document.querySelector(".btn-for-mobile-nav");
const headerEl = document.querySelector(".navigation");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
