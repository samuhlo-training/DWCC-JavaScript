"use strict";

const respuesta = document.getElementById("respuesta");
const arrNumeros = [];

function add() {
  arrNumeros.splice(0, arrNumeros.length);
  for (let x = 1; x <= 6; x++) {
    let num = prompt(
      `Introduce un numero que no sea negativo ni repedito (${x}/6) :`
    );
    if (num < 0 || arrNumeros.includes(num)) {
      num = prompt(
        `Numero no valido.Introduce un numero que no sea negativo ni repedito (${x}/6) :`
      );
    }
    arrNumeros.push(num);
  }
}

function pares() {
  const numPares = arrNumeros.filter((num) => num % 2 == 0);
  respuesta.innerHTML = numPares;
}
