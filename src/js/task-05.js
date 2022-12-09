"use strict";

const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", (e) => {
  let inputValue = e.currentTarget.value;
  if (inputValue === "") {
    inputValue = "Anonymous";
  }
  output.textContent = inputValue;
});
