"use strict";
const mainList = document.querySelector("#categories");

console.log(`Number of categories: ${mainList.children.length}`);
console.log(""); //For a nice break in console

for (let i = 0; i <= mainList.children.length - 1; i++) {
  //iterate trough each li
  const category = mainList.children[i];
  const title = category.children[0].textContent; //select header content
  const categoryElems = category.children[1].children.length; //count items in category

  console.log(`Category: ${title}`);
  console.log(`Elements: ${categoryElems} `);
  console.log(""); //For a nice break in console
}
