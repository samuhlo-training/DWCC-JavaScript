"use strict";

const resumen = document.getElementById("resumen");
const mapaPalabras = new Map();

function add() {
  let palabra = document.getElementById("palabras").value;
  if (mapaPalabras.has(palabra)) {
    let suma = mapaPalabras.get(palabra) + 1;
    mapaPalabras.set(palabra, suma);
  } else {
    mapaPalabras.set(palabra, 1);
  }
}

function listado() {
  console.log(mapaPalabras);
  console.log(mapaPalabras.size);
  const mapIterCantidad = mapaPalabras.values();
  const mapIterPalabra = mapaPalabras.keys();

  for (let x = 0; x < mapaPalabras.size; x++) {
    // console.log(mapIterPalabra.next().value);
    // console.log(mapIterCantidad.next().value);
    const parrafo = document.createElement("p");
    const textoP = document.createTextNode(
      `La palabra ${mapIterPalabra.next().value} se repite ${
        mapIterCantidad.next().value
      } veces.`
    );
    parrafo.appendChild(textoP);
    resumen.appendChild(parrafo);
  }
}
