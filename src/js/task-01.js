"use strict";
const mainList = document.querySelector("#categories");

console.log(`Number of categories: ${mainList.children.length}`);
console.log(mainList.children);

for (let i = 0; i <= mainList.children.length - 1; i++) {
  const category = mainList.children[i];
  const title = category.children[0].textContent;
  const categoryElems = category.children[1].children.length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${categoryElems} `);
}
