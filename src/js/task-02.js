const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const liArray = [];

ingredients.forEach((el) => {
  const li = document.createElement("li");
  li.textContent = el;
  li.classList.add("item");

  liArray.push(li); //Would it not be better to append it one by one here instead of creating an array?
});

list.append(...liArray);
