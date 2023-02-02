"use strict";

let numberArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const multiplicarTodo = function (array) {
  let total = 1;
  for (let i = 0; i < array.length; i++) {
    for (let x = 0; x < array[i].length; x++) {
      total *= array[i][x];
    }
  }
  return total;
};

console.log(multiplicarTodo(numberArray));

const diagonalIzquierada =
  numberArray[0][0] + numberArray[1][1] + numberArray[2][2];
const diagonalDerecha =
  numberArray[2][2] + numberArray[1][1] + numberArray[0][0];

const respuesta = document.getElementById("respuesta");

respuesta.innerHTML = `${multiplicarTodo(
  numberArray
)} es la multiplicacion de todo, la diagonal izquiera es ${diagonalIzquierada} y la diagonal derecha es ${diagonalDerecha} `;
