console.log("hello world");
console.dir(document);

//selecting HTML elements on JS
const mainTitle = document.getElementById("main-title");
console.log(mainTitle);

const mainContainer = document.querySelector(".main-container");
console.log(mainContainer);

const h2 = document.querySelector("h2");
console.log(h2);

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

//change font family
const fontFamily = (document.body.style.fontFamily = "monospace");

// let htmlDocument = document.documentElement;
// htmlDocument.remove(document);
