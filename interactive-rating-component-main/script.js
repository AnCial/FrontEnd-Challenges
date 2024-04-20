"use strict";

const ratings = document.querySelectorAll(".container__front--rating-circle");
const btn = document.querySelector(".container__front--btn");
const front = document.querySelector(".container__front");
const back = document.querySelector(".container__back");
const span = document.getElementById("rating");
const container = document.querySelector(".container");

for (let i = 0; i < ratings.length; i++) {
  ratings[i].addEventListener("click", function () {
    const rating = ratings[i].innerHTML; //The innerHTML property sets or returns the HTML content (inner HTML) of an element. We use this to shove the number chosen for the rating thing

    for (let i = 0; i < ratings.length; i++) {
      //this one is a toggle to add/remove the selected rating or thing
      ratings[i].classList.contains("selected");
      ratings[i].classList.remove("selected");
    }
    ratings[i].classList.add("selected");

    btn.addEventListener("click", function () {
      front.style.display = "none";
      back.style.display = "flex";
      container.classList.add("animated");
      span.innerHTML = rating;
    });
  });
}
