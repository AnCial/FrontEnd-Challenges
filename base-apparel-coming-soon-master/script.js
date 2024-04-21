"use strict";

const sendBtn = document.querySelector(".button");
const errorMsg = document.querySelector(".container__group--error-msg");
const errorIcon = document.querySelector(".container__group--error");
const inputEl = document.querySelector(".container__group--form");
const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

sendBtn.addEventListener("click", function () {
  if (inputEl.value.length === 0 || !inputEl.value.match(emailValidation)) {
    errorMsg.style.display = "inline";
    errorIcon.style.display = "inline";
    errorMsg.style.color = "red";
    errorMsg.textContent = "Please provide a valid email address";
  } else {
    errorMsg.style.display = "inline";
    errorMsg.style.color = "green";
    errorIcon.style.display = "none";
    errorMsg.textContent = "Thank you for subscribing to our newsletter!";
  }
});
