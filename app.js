console.log("hello world");
console.dir(document);

//selecting HTML elements on JS
const mainTitle = document.getElementById("main-title");
console.log(mainTitle);

const mainContainer = document.querySelector(".main-container");
console.log(mainContainer);

const h2 = document.querySelector("h2");
console.log(h2);

h2.append(" - this is a new text");
h2.textContent = "This is replacing the a whole text";

//selecting multiple elements --> querySelectorAll
const allParagraphs = document.querySelectorAll("p");
console.log(allParagraphs);

//adding a new HTML element
const newImage = document.createElement("img");
console.log(newImage);

//adding attributes to the new element
newImage.src = "https://www.fillmurray.com/200/300";

newImage.alt = "Bill Murray";
console.log(newImage);

//append the new element to the DOM
mainContainer.appendChild(newImage);

//delete an element
mainContainer.remove(newImage);

//change background color
const body = document.querySelector("*");
body.style.backgroundColor = "lightblue";

const h1 = document.createElement("h1");
h1.textContent = "This is a Heading!";
body.appendChild(h1);

const list = document.createElement("ul");
const listItem1 = document.createElement("li");
listItem1.textContent = "This is fisrt";
const listItem2 = document.createElement("li");
listItem2.textContent = "This is second";
const listItem3 = document.createElement("li");
listItem3.textContent = "This is third";
list.appendChild(listItem1);
list.appendChild(listItem2);
list.appendChild(listItem3);
body.appendChild(list);

//change font family
const fontFamily = (document.body.style.fontFamily = "monospace");

//deleting everything from js
// let htmlDocument = document.documentElement;
// htmlDocument.remove(document);
