"use strict";

const inputBox = document.querySelector("#validation-input");

console.log(inputBox.dataset.length);
inputBox.addEventListener("blur", (e) => {
  const correctValue = Number(inputBox.dataset.length);
  const currentValue = inputBox.value.length;

  if (currentValue === correctValue) {
    inputBox.classList.add("valid");
    inputBox.classList.remove("invalid");
  } else {
    inputBox.classList.add("invalid");
    inputBox.classList.remove("valid");
  }
});
