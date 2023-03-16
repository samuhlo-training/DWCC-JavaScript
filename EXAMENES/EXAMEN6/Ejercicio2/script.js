"use strict";

let etiqueta,
  texto,
  atributo1,
  valor1,
  atributo2,
  valor2,
  atributo3,
  valor3,
  action;
const getDatos = function () {
  etiqueta = document.querySelector(".input--etiqueta").value;
  console.log(etiqueta);
  texto = document.querySelector(".input--texto").value;
  console.log(texto);
  atributo1 = document.querySelector(".input--atributo1").value;
  console.log(atributo1);
  valor1 = document.querySelector(".input--valor1").value;
  console.log(valor1);
  atributo2 = document.querySelector(".input--atributo2").value;
  console.log(atributo2);
  valor2 = document.querySelector(".input--valor2").value;
  console.log(valor2);
  atributo3 = document.querySelector(".input--atributo3").value;
  console.log(atributo3);
  valor3 = document.querySelector(".input--valor3").value;
  console.log(valor3);
  action = document.querySelector(".input--action").value;
  console.log(action);
};

const crearNuevo = function () {
  getDatos();
  let nuevaEtiqueta = document.createElement(etiqueta);
  nuevaEtiqueta.innerHTML = texto;
  nuevaEtiqueta.setAttribute(atributo1, valor1);
  nuevaEtiqueta.setAttribute(atributo2, valor2);
  nuevaEtiqueta.setAttribute(atributo3, valor3);
  nuevaEtiqueta.setAttribute("action", action);
  document.body.appendChild(nuevaEtiqueta);
};

document.querySelector(".btn--mostrar").addEventListener("click", crearNuevo);
