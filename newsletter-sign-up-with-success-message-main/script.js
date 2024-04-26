"use strict";

const sendBtn = document.querySelector(".button--subscribe");
const disBtn = document.querySelector(".button--dismiss");
const errorMsg = document.querySelector(".form__errorMsg");
const inputEl = document.querySelector(".form__field");
const imgBox = document.querySelector(".container__img");
const emailTxt = document.getElementById("email-text");
const conBox1 = document.querySelector(".form--subscribe");
const conBox2 = document.querySelector(".container__box-2");
const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const mqMin = window.matchMedia("(min-width: 851px)");

sendBtn.addEventListener("click", function () {
  event.preventDefault();

  if (inputEl.value.length === 0 || !inputEl.value.match(emailValidation)) {
    errorMsg.style.display = "inline";
    errorMsg.style.color = "red";
    errorMsg.textContent = "Please provide a valid email address";
  } else {
    if (window.innerWidth > 850) {
      conBox2.style.opacity = 1;
      conBox2.style.display = "block";
      emailTxt.innerHTML = inputEl.value;
      imgBox.style.transform = "translateX(6%)";
    } else {
      emailTxt.innerHTML = inputEl.value;
      conBox1.style.opacity = 0;
      conBox1.style.zIndex = 0;
      // conBox2.style.opacity = 1;
      // conBox2.style.display = "block";
      // conBox2.style.z-index = 999;

      // imgBox.style.transform = "translateY(0)";
    }
  }
});

disBtn.addEventListener("click", function () {
  event.preventDefault();
  if (window.innerWidth > 850) {
    imgBox.style.transform = "translateX(100%)";
    window.location.reload();
  } else {
    window.location.reload();
  }
});
