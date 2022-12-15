"use strict";

const respuesta = document.getElementById("respuesta");
const arrayPalabras = new Array();
const clear = () => (respuesta.innerHTML = "");

function add() {
  let palabra = document.getElementById("palabras").value;
  if (!arrayPalabras.includes(palabra)) {
    arrayPalabras.push(palabra);
  }
  console.log(arrayPalabras);
}
function code(array) {
  return array.map((x) => x.replace(/[aeiou]/g, "*"));
}

function codificar() {
  clear();
  // const cadenaTexto = arrayPalabras.toString();
  // const regex = /[aeiou]/g;
  // const newText = cadenaTexto.replace(regex, "*");
  // const arrayFinal = newText.split(",");
  // console.log(arrayFinal);
  const arrayFinal = code(arrayPalabras);
  arrayFinal.forEach((x) => (respuesta.innerHTML += `${x}<br>`));
}

// Minimo 8 caracteres
// Maximo 15
// Al menos una letra mayúscula
// Al menos una letra minucula
// Al menos un dígito
// No espacios en blanco
// Al menos 1 caracter especial

// /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/
