"use strict";
const mark = function () {
  const word = prompt("Introduce una palabra para buscar");
  const body = document.body;
  const regex = new RegExp("\\b" + word + "\\b", "gi");
  const matches = body.innerHTML.match(regex);
  matches
    ? (body.innerHTML = body.innerHTML.replace(regex, "<mark>$&</mark>"))
    : alert("La palabra '" + word + "' no aparece en esta pagina.");
};

document.querySelector(".btn--mark").addEventListener("click", mark);
