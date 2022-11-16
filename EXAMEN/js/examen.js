"use strict";

// Ejercico primos

const esPrimo = function (numero) {
  for (let x = 2; x < numero; x++) {
    if (numero % x === 0) return false;
  }
  return true;
};

console.log(esPrimo(11));

//Ejercicio Fibonaci

const serieFibonachi = function (cantidad) {
  const fibonachiArr = [0, 1];
  for (let i = 2; i < cantidad; i++) {
    fibonachiArr.push(fibonachiArr[i - 1] + fibonachiArr[i - 2]);
  }
  return fibonachiArr;
};

console.log(serieFibonachi(15));

const serieFiboFor = function (cantidad) {
  let num1 = 0;
  let num2 = 1;
  document.write(`${num1} ${num2} `);
  let siguiente;
  for (let i = 3; i <= cantidad; i++) {
    siguiente = num1 + num2;
    document.write(`${siguiente} `);
    num1 = num2;
    num2 = siguiente;
  }
};

serieFiboFor(10);

//Ejercicio cartas

const repartirCartas = function (numCartas) {
  const palos = ["oros", "bastos", "espadas", "copas"];
  const valor = ["As", 2, 3, 4, 5, 6, 7, 8, 9, "Sota", "Caballo", "Reyes"];
  const mano = [];
  let contadorCartas = 0;
  //   do {
  //     let carta = `${valor[Math.floor(Math.random() * 12)]} de ${
  //       palos[Math.floor(Math.random() * 4)]
  //     }`;
  //     if (carta !== mano[contadorCartas]) mano.push(carta);
  //     contadorCartas++;
  //   } while (contadorCartas < numCartas);

  //   return mano;

  for (let i = 0; i < numCartas; i++) {
    let carta = `${valor[Math.floor(Math.random() * 12)]} de ${
      palos[Math.floor(Math.random() * 4)]
    }`;
    if (carta != mano[i]) mano.push(carta);
  }
  return mano;
};

console.log(repartirCartas(8));

// Ejercicio tablas de multiplicar

const tablas = function (numero) {
  document.write(`<br/>TABLA DE SUMAR<br/>`);
  for (let i = 1; i <= 10; i++) {
    document.write(`${numero} + ${i} = ${numero + i}<br/>`);
  }
  document.write(`<br/>TABLA DE RESTAR<br/>`);
  for (let i = 1; i <= 10; i++) {
    document.write(`${numero} - ${i} = ${numero - i}<br/>`);
  }
  document.write(`<br/>TABLA DE MULTIPLICAR<br/>`);
  for (let i = 1; i <= 10; i++) {
    document.write(`${numero} * ${i} = ${numero * i}<br/>`);
  }
};

tablas(5);
