"use strict";

const btnNavEl = document.querySelector(".hamburger__box");
const headerEl = document.querySelector(".navigation");
const hamburger = document.querySelector(".hamburger");
const sendBtn = document.querySelector(".btn--bottom");
const errorMsg = document.querySelector(".form__label");
const inputEl = document.querySelector(".form-bottom");
const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const toggleIcon = document.querySelector(".navigation__toggle");
const icons = document.querySelector(".navigation__toggle i");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

const hamburgerChange = () => {
  hamburger.classList.toggle("hamburger--active");
};

hamburger.addEventListener("click", hamburgerChange);

///// Form errors

sendBtn.addEventListener("click", function () {
  console.log("hey");
  if (inputEl.value.length === 0 || !inputEl.value.match(emailValidation)) {
    errorMsg.style.display = "inline";
    errorMsg.style.color = "red";
    errorMsg.textContent = "Please provide a valid email address";
  } else {
    errorMsg.style.display = "inline";
    errorMsg.style.color = "green";
    errorMsg.textContent = "Thank you for subscribing to our newsletter!";
  }
});

sendBtn.addEventListener("click", function () {
  console.log("hey");
});

const changeIcon = function (icon) {
  icon.classList.toggle("bx-sun");
};
