"use strict";

const body = document.body;

const totalWords = countWords(body.innerText);
const newPara = document.createElement("p");
newPara.style.fontWeight = "Bold";
const text = document.createTextNode(
  `Este documento tiene ${totalWords} palabras`
);
newPara.appendChild(text);

body.prepend(newPara);

function countWords(text) {
  return text.trim().split(/\s+/).length;
}
