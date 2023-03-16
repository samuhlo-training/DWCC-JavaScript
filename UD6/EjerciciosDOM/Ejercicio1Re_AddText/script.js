"use strict";

const body = document.body;

for (let i = 1; i <= 10; i++) {
  const paragraph = document.createElement("p");
  const text = document.createTextNode("Texto aleatorio #" + i);
  paragraph.appendChild(text);
  body.appendChild(paragraph);
}

function insertText() {
  let position;
  do {
    position = prompt("Porfavor introduce un numero entre 1 y 10:");
  } while (position < 1 || position > 10);
  const newPara = document.createElement("p");
  const text = document.createTextNode(prompt("Porfavor introduce tu texto:"));
  const boldText = document.createElement("b");
  const referenceNode = body.getElementsByTagName("p")[position - 1];
  boldText.appendChild(text);
  newPara.appendChild(boldText);

  position === 10
    ? body.appendChild(newPara)
    : body.insertBefore(newPara, referenceNode.nextSibling);
}

document.querySelector(".btn-add").addEventListener("click", insertText);
