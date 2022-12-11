function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let size = 30;
const buttons = document.querySelectorAll("button");
const controls = document.querySelector("#controls");
const input = document.querySelector("input[type=number]");
const boxes = document.querySelector("#boxes");

controls.addEventListener("click", clickHandler);

function clickHandler(e) {
  const action = Object.keys(e.target.dataset)[0];

  if (action === "create") {
    createBoxes();
  } else if (action === "destroy") {
    destroyBoxes();
  }
}

function createBoxes() {
  const boxesAmount = input.value;

  for (let i = 1; i <= boxesAmount; i++) {
    const div = document.createElement("div");
    const unit = "px";
    div.style.width = size + unit;
    div.style.height = size + unit;
    div.style.backgroundColor = getRandomHexColor();

    size += 10;

    boxes.append(div);
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
  size = 30;
}
