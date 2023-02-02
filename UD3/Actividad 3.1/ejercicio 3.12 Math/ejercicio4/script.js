"use strict";
const limpiar = () => (resultado.innerHTML = " ");
const resultado = document.getElementById("resultado");

function potencia() {
  const base = Number(prompt("Escribe una base"));
  const exponente = Number(prompt("Escribe un exponente"));
  resultado.innerHTML = `La potencia de ${base} elevado a ${exponente} es : ${Math.pow(
    base,
    exponente
  )}`;
  return Math.pow(base, exponente);
}

function raiz() {
  const num = Number(prompt("Escribe un numero, no negativo"));
  resultado.innerHTML = `La raiz de ${num} es : ${Math.sqrt(num)}`;
  return Math.sqrt(num);
}

function redondeo() {
  const decimal = Number(prompt("Escribe un numero decimal"));
  resultado.innerHTML = `Alta : ${Math.ceil(decimal)} Baja : ${Math.floor(
    decimal
  )}`;
}

function trigonometria() {
  const angulo = Number(prompt("Introduce un angulo en radianes"));
  const seno = Math.sin(angulo);
  const coseno = Math.cos(angulo);
  const tangente = Math.tan(angulo);
  resultado.innerHTML = `Dado el angulo ${angulo} : <br> Seno = ${seno} <br> Coseno = ${coseno} <br> Tangente = ${tangente}`;
}
