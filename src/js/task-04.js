"use strict";

let counterValue = 0;
const valueSpan = document.querySelector("#value");
const buttons = document.querySelectorAll("button");
const counter = document.querySelector("#counter");

counter.addEventListener("click", clickHandler);

function clickHandler(e) {
  const action = e.target.dataset.action;
  if (action === "decrement") {
    counterValue -= 1;
    valueSpan.textContent = counterValue;
  } else if (action === "increment") {
    counterValue += 1;
    valueSpan.textContent = counterValue;
  }
}

function add() {
  console.log("it works");
  valueSpan.textContent = Number(Number(valueSpan.textContent) + 1);
}

function subtract() {
  console.log("it works");
  valueSpan.textContent = Number(valueSpan.textContent - 1);
}
