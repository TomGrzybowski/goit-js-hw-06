"use strict";
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const list = document.querySelector(".gallery");
const imagesElems = [];

const markup = images
  .map((img) => `<li><img url="${img.url}" alt="${img.alt}".></img></li>`)
  .join("");

list.insertAdjacentHTML("beforeend", markup);
list.style.display = "Flex";
list.style.listStyle = "none";
list.style.padding = "5px";

//ALTERNATIVE SOLUTION
// images.forEach((el) => {
//   const li = document.createElement("li");
//   const img = document.createElement("img");

//   img.setAttribute("url", el.url);
//   img.setAttribute("alt", el.alt);

//   list.append(img);
// });
