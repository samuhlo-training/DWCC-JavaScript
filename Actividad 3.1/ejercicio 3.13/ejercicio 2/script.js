"use strict";
const limpiar = () => (resultado.innerHTML = " ");
const resultado = document.getElementById("resultado");

function calcular() {
  let num = Number(document.getElementById("entero").value);
  const exponencial = num.toExponential();
  const cuatroDecimales = Number.parseFloat(num).toFixed(4);
  const binario = num.toString(2);
  const octal = num.toString(8);
  const hexa = num.toString(16);
  resultado.innerHTML = `Exponencial : ${exponencial} <br> 4 decimales : ${cuatroDecimales} <br> Binario : ${binario} <br> Octal : ${octal} <br> Hexadecimal ${hexa}`;
}
