let opcion = Number(
  prompt("Introduce el numero de ejerccio a comprobar ( 1, 2 o 3 ) :")
);
switch (opcion) {
  case 1:
    ejercicio1();
    break;
  case 2:
    ejercicio2();
    break;
  default:
    ejercicio3();
    break;
}

function ejercicio1() {
  alert(`Ejercicio 37`);
  document.write(`37. Escribir un programa que solicite la carga de un número entre 0 y 999,
  y nos muestre un mensaje de cuántos dígitos tiene el mismo. Finalizar el
  programa cuando se cargue el valor 0.`);

  let num = Number(
    prompt("Escribe un numero de 0 a 999. ( Para salir introduce 0 )")
  );

  do {
    if (num > 0 && num < 10) {
      alert(`${num} tiene 1 digito`);
    } else if (num >= 10 && num < 100) {
      alert(`${num} tiene 2 digitos`);
    } else {
      alert(`${num} tiene 3 digitos`);
    }
    num = Number(
      prompt("Escribe un numero de 0 a 999. ( Para salir introduce 0 )")
    );
  } while (num != 0);
}

function ejercicio2() {
  alert(`Ejercicio 39`);
  document.write(`49. Crear un programa que al introducir un número por teclado nos diga si
  ese número es perfecto (igual a la suma de sus divisores no incluido él
  mismo). Se cuenta con la siguiente información:<br>
  a. Las edades de 5 estudiantes del turno mañana.<br>
  b. Las edades de 6 estudiantes del turno tarde.<br>
  c. Las edades de 7 estudiantes del turno noche.<br>
  d. Las edades de cada estudiante se deben ingresarse por teclado.<br>
  i. Obtener el promedio de las edades de cada turno (tres promedios).<br>
  ii. Imprimir dichos promedios (promedio de cada turno).<br>
  iii. Mostrar por pantalla un mensaje que indique cuál de los tres
  turnos tiene un promedio de edades mayor.<br><br><br>`);
  const edadesMañana = [];
  const edadesTarde = [];
  const edadesNoche = [];

  function pedirEdad(turno) {
    function numPerfecto(num) {
      let perfecto = false;
      let total = 0;
      for (let i = 1; i < num; i++) {
        if (num % i === 0) {
          total += i;
        }
      }
      if (total === num) {
        perfecto = true;
      }
      return perfecto;
    }
    let num = Number(prompt(`Introduce una edad del turno de ${turno}`));
    let perfecto = numPerfecto(num);
    if (perfecto) {
      alert("Es perfecto");
    }
    return num;
  }
  function mediaEdad(arr) {
    let suma = 0;
    arr.forEach(function (arr) {
      suma += arr;
    });
    return (suma / arr.length).toFixed(1);
  }

  for (let x = 1; x <= 5; x++) {
    edad = pedirEdad("mañana");
    edadesMañana.push(edad);
  }
  for (let x = 1; x <= 6; x++) {
    edad = pedirEdad("tarde");
    edadesTarde.push(edad);
  }
  for (let x = 1; x <= 7; x++) {
    edad = pedirEdad("noche");
    edadesNoche.push(edad);
  }
  let contador = 0;
  let mayor;
  if (mediaEdad(edadesMañana) > mediaEdad(edadesTarde)) {
    contador = mediaEdad(edadesMañana);
    mayor = "turno de mañana";
  } else {
    contador = mediaEdad(edadesTarde);
    mayor = "turno de tarde";
  }
  if (mediaEdad(edadesNoche) > contador) {
    mayor = "turno de noche";
  }

  document.write(
    `La media de edad de la mañana es <b>${mediaEdad(
      edadesMañana
    )}</b>, la de la tarde es <b>${mediaEdad(
      edadesTarde
    )}</b> y por ultimo la media de edad de la noche es <b>${mediaEdad(
      edadesNoche
    )}</b><br>La media de edad mayor es en el <b>${mayor}</b>`
  );

  console.log(edadesMañana);
  console.log(edadesTarde);
  console.log(edadesNoche);
}
function ejercicio3() {
  alert(`Ejercicio 50-51-52`);
  document.write(`50. Realizar un programa que dados dos números encuentre el m.c.m.<br>
  51. Realizar un programa que dados dos números encuentre el m.c.d.<br>
  52. Realizar un programa que al introducir un número por teclado nos diga
  si es primo o no.<br><br><br>`);
  const maximoComunDivisor = (a, b) => {
    let temporal; //Para no perder b
    while (b !== 0) {
      temporal = b;
      b = a % b;
      a = temporal;
    }
    return a;
  };
  const minimoComunMultiplo = (a, b) => {
    return (a * b) / maximoComunDivisor(a, b);
  };

  const esPrimo = (numero) => {
    if (numero == 0 || numero == 1 || numero == 4) return false;
    for (let x = 2; x < numero / 2; x++) {
      if (numero % x == 0) return false;
    }
    return true;
  };

  let a = Number(prompt("Introduce el primer numero"));
  if (esPrimo(a)) {
    alert(`${a} es un numero primo`);
  }
  let b = Number(prompt("Introduce el segundo numero"));
  if (esPrimo(b)) {
    alert(`${b} es un numero primo`);
  }

  document.write(
    `El m.cm de ${a} y ${b} es <b>${minimoComunMultiplo(
      a,
      b
    )}</b><br>El m.c.d seria <b>${maximoComunDivisor(a, b)}</b>`
  );
}
