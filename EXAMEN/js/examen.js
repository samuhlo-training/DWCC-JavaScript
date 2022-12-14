"use strict";

// Ejercico primos

let num1 = 0;
let num2 = 0;

while (num1 < 1 || num1 > 100 || num2 < 1 || num2 > 100) {
  num1 = parseInt(prompt("introduzca un numero entre [1..100]"));
  num2 = parseInt(prompt("introduzca otro numero entre [1..100]"));
}

const esPrimo = function (numero) {
  for (let x = 2; x < numero; x++) {
    if (numero % x === 0) return false;
  }
  return true;
};

//Calcular los divisores

const calcularDivisores = function (numero) {
  let max = numero / 2;
  const divisores = [];
  for (let x = 1; x <= max; x++) {
    if (numero % x == 0) divisores.push(x);
  }
  return divisores;
};

document.write(`<strong>EJERCICIO NUMEROS</strong><br>`);
if (esPrimo(num1)) {
  document.write(`<br>El numero ${num1} es primo<br>`);
} else {
  document.write(`<br>El numero ${num1} no es primo<br>`);
}
document.write(`<br>Sus divisores son ${calcularDivisores(num1)}<br>`);
if (esPrimo(num2)) {
  document.write(`<br>El numero ${num2} es primo<br>`);
} else {
  document.write(`<br>El numero ${num2} no es primo<br>`);
}
document.write(`<br>Sus divisores son ${calcularDivisores(num2)}<br>`);

console.log(calcularDivisores(44));

// const contadorDivisores = function () {
//   let divisores = calcularDivisores(44);
//   let temp = 44;
//   let contador = 0;
//   for (let x = 0; x < divisores.length; x++) {
//     while (temp % divisores[x] !== 0) {
//       temp = temp / divisores[x];
//       contador++;
//     }
//     document.write(`El divisor ${divisores[x]} se repite ${contador} veces`);
//   }
// };
// contadorDivisores();

//Ejercicio Fibonaci

let cantidadFibo = Number(prompt("Escribe cantidad de numeros de la serie"));

const serieFibonachi = function (cantidad) {
  const fibonachiArr = [0, 1];
  for (let i = 2; i < cantidad; i++) {
    fibonachiArr.push(fibonachiArr[i - 1] + fibonachiArr[i - 2]);
  }
  return fibonachiArr;
};
const numerosFibonachi = serieFibonachi(cantidadFibo);

const divisoresTres = [];
const acabadosSiete = [];

const calcularVariantes = function (serie) {
  for (let i = 2; i < serie.length; i++) {
    if (serie[i] % 3 == 0) divisoresTres.push(serie[i]);
    if (serie[i] % 10 == 7) acabadosSiete.push(serie[i]);
  }
  return `<br><br><strong>La serie Fibonachi de ${serie.length} es : <br><br>
  ${serie}</strong><br><br>
  La cantidad de divisores de <strong>tres</strong> es de <strong>${divisoresTres.length}</strong><br><br>
  La cantidad de numeros acabados en <strong>siete</strong> es de <strong>${acabadosSiete.length}</strong><br>`;
};

document.write(calcularVariantes(numerosFibonachi));

// const serieFiboFor = function (cantidad) {
//   let num1 = 0;
//   let num2 = 1;
//   document.write(`${num1} ${num2} `);
//   let siguiente;
//   for (let i = 3; i <= cantidad; i++) {
//     siguiente = num1 + num2;
//     document.write(`${siguiente} `);
//     num1 = num2;
//     num2 = siguiente;
//   }
// };

// serieFiboFor(10);

//Ejercicio cartas

const palos = ["oros", "bastos", "espadas", "copas"];
const valores = ["As", 2, 3, 4, 5, 6, 7, 8, 9, "Sota", "Caballo", "Reyes"];
const baraja = [];
const juego = [];
let jugadores = [];
console.log(baraja);
for (let x = 0; x < palos.length; x++) {
  for (let i = 0; i < valores.length; i++) {
    baraja.push(`${valores[i]} de ${palos[x]}`);
  }
}

const barajar = function (baraja) {
  for (let i = 0; i < baraja.length; i++) {
    let aleatorio = Math.floor(Math.random() * baraja.length);
    [baraja[i], baraja[aleatorio]] = [baraja[aleatorio], baraja[i]];
  }
};

// const repartirCartas = function (jugadores, baraja) {
//   let cartasRepartir = baraja.length / jugadores;
//   for (let i = 0; i < jugadores; i++) {
//     juego[i] = [`Jugador ${i + 1} :`];
//     // console.log(juego);
//     for (let x = 1; x <= cartasRepartir; x++) {
//       let sacarCarta = baraja.pop();
//       console.log(sacarCarta);
//       barajar(baraja);
//       juego[i].push(sacarCarta);
//     }
//   }
//   return juego;
// };

const repartirCartas = function (numJugadores, baraja) {
  jugadores = [numJugadores];
  for (let x = 0; x < numJugadores; x++) {
    jugadores[x] = new Array();
  }
  while (baraja.length > 0) {
    for (let i = 0; i < numJugadores; i++) {
      jugadores[i].push(baraja.pop());
      barajar(baraja);
    }
  }
  return jugadores;
};

const mostrarCartas = function () {
  let cartas = repartirCartas(4, baraja);
  for (let x = 0; x < cartas.length; x++) {
    document.write(`<br><strong>Jugador ${x + 1}</strong> : ${cartas[x]}<br>`);
  }
};
document.write(`<br><br><br><strong>EJERCICIO CARTAS</strong><br>`);
mostrarCartas();

// const repartirCartas = function (numCartas) {
//   const palos = ["oros", "bastos", "espadas", "copas"];
//   const valor = ["As", 2, 3, 4, 5, 6, 7, 8, 9, "Sota", "Caballo", "Reyes"];
//   const mano = [];
//   let contadorCartas = 0;
//   do {
//     let carta = `${valor[Math.floor(Math.random() * 12)]} de ${
//       palos[Math.floor(Math.random() * 4)]
//     }`;
//     if (carta !== mano[contadorCartas]) mano.push(carta);
//     contadorCartas++;
//   } while (contadorCartas < numCartas);

//   return mano;

//   for (let i = 0; i < numCartas; i++) {
//     let carta = `${valor[Math.floor(Math.random() * 12)]} de ${
//       palos[Math.floor(Math.random() * 4)]
//     }`;
//     if (carta != mano[i]) mano.push(carta);
//   }
//   return mano;
// };

// Ejercicio tablas de multiplicar

const tablas = function (numero) {
  document.write(`<br/><br/>TABLA DE SUMAR<br/>`);
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
