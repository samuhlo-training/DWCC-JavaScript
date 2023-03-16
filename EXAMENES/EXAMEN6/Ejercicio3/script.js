"use strict";

const mostrarGeneros = function () {
  let checkedArray = new Array();
  const checkboxes = document.querySelectorAll("input");
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      console.log(checkbox.getAttribute("name"));
      checkedArray.push(checkbox.getAttribute("name"));
    }
  });
  let generosMarcados = checkedArray.join(", ");
  console.log(generosMarcados);
  const generos_fav = document.getElementById("generos_fav");
  generos_fav.innerHTML = " ";
  const parr = document.createElement("p");
  parr.innerHTML = generosMarcados;
  generos_fav.appendChild(parr);
};

document
  .querySelector(".btn--mostrar")
  .addEventListener("click", mostrarGeneros);
