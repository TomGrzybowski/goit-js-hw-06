"use strict";

const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

input.addEventListener("input", (e) => {
  const newFontSize = input.value;
  text.style.fontSize = newFontSize + "px";
});
