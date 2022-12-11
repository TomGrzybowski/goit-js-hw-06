"use strict";

const form = document.querySelector(".login-form");
const inputs = document.querySelectorAll(".login-form input");
const mailInput = document.querySelector("input[type=email]");
const passInput = document.querySelector("input[type=password]");
const credentials = {};
let isEmpty = false;

function checkInputs() {
  inputs.forEach((el) => {
    if (el.value === "") {
      isEmpty = true;
    } else {
      isEmpty = false;
    }
  });
}

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  checkInputs();
  e.preventDefault();
  const {
    elements: { email, password },
  } = e.currentTarget;

  if (isEmpty) {
    alert("Email and Password fields can't be empty");
    return;
  }

  credentials["email"] = email.value;
  credentials["pasword"] = password.value;

  console.log(credentials);
  e.currentTarget.reset();
}
