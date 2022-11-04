var dias_semana = [
  "lunes",
  "martes",
  "miércoles",
  "jueves",
  "viernes",
  "sábado",
  "domingo",
];
var preciosHab = [102, 240, 514, 167, 203, 974, 745, 232, 435];
var preciosAdd = [543, 634, 234, 734, 127];
var frutas = [
  "limón",
  "pera",
  "manzana",
  "naranja",
  "pomelo",
  "sandia",
  "aguacate",
  "nuez",
  "melón",
  "avellana",
];

function eligeEjercicio() {
  let eleccion = Number(prompt("Elige ejercicio (1  - 15 )"));
  switch (eleccion) {
    case 1:
      ejercicio1();
      break;
    case 2:
      ejercicio2();
      break;
    case 3:
      ejercicio3();
      break;
    case 4:
      ejercicio4();
      break;
    case 5:
      ejercicio5();
      break;
    case 6:
      ejercicio6();
      break;
    case 7:
      ejercicio7();
      break;
    case 8:
      ejercicio8();
      break;
    case 9:
      ejercicio9();
      break;
    case 10:
      ejercicio10();
      break;
    case 11:
      ejercicio11();
      break;
    case 12:
      ejercicio12();
      break;
    case 13:
      ejercicio13();
      break;
    case 14:
      ejercicio14();
      break;
    default:
      ejercicio15();
      break;
  }
}

const ejercicio1 = function () {
  preciosHab.shift();
  preciosHab.pop();
  const deleteArr = function () {
    let posicion = Number(
      prompt("Escribe el numero del array que quieres borrar")
    );
    preciosHab.splice(posicion, 1);
    document.write(preciosHab);
  };
  deleteArr();
};

const ejercicio2 = function () {
  const preciosHabDir = preciosHab.map((x) => x * 3);
  document.write(preciosHabDir);
  const preciosHabInv = preciosHab.reverse().map((x) => x * 3);
  document.write("<br>");
  document.write(preciosHab);
};

const ejercicio3 = function () {
  document.write(dias_semana);
  document.write("<br>");
  const diasString = dias_semana.join("-");
  document.write(diasString);
  document.write("<br>");
  const vueltaOriginal = diasString.split("-");
  document.write(vueltaOriginal);
};

const ejercicio4 = function () {
  let mayor500 = [];
  let mayor50 = true;
  function mayor(num) {
    if (num > 500) {
      mayor500.push(num);
    }
  }
  function cincuenta(num) {
    if (num < 50) {
      return false;
    } else {
      return true;
    }
  }
  preciosHab.forEach(mayor);
  preciosHab.forEach(cincuenta);
  document.write(`Son mayores que 500 : ${mayor500}`);
  document.write("<br>");
  if (mayor50) {
    document.write("Son todos mayor que 50");
  } else {
    document.write("No son todos mayor que 50");
  }
};

const ejercicio5 = function () {
  const newArr = preciosHab.slice(0, 8);
  document.write(newArr);
  document.write("<br>");
  document.write(`La longitud actual es ${newArr.length}`);
};
const ejercicio6 = function () {
  const ordenFrutas = frutas.sort((a, b) => a.localeCompare(b));
  document.write(ordenFrutas);
  const frutasSegundaLetra = frutas.sort(
    (a, b) => a.charCodeAt(1) - b.charCodeAt(1)
  );
  document.write("<br>");
  document.write(frutasSegundaLetra);
};
const ejercicio7 = function () {
  const startsM = dias_semana.filter((dias) => dias.startsWith("m"));
  document.write(startsM);
  document.write("<br>");
  for (let x = 0; x < dias_semana.length; x++) {
    document.write(`${dias_semana[x]} = ${x + 1}º dia<br>`);
  }
};
const ejercicio8 = function () {
  const preciosAsc = preciosHab.concat(preciosAdd).sort();
  document.write(preciosAsc);
  document.write("<br>");
  const preciosDes = preciosHab.concat(preciosAdd).reverse();
  document.write(preciosDes);
};

const ejercicio9 = function () {
  let total = 0;
  preciosHab.forEach(function (a) {
    total += a;
  });
  let media = total / preciosHab.length;
  document.write(`${total} es la suma de todo y la medias es ${media}`);
};

const ejercicio10 = function () {
  document.write(preciosHab.reverse());
};

const ejercicio11 = function () {
  const numerosImpares = [];
  for (let i = 0; i < preciosHab.length; i++) {
    if (preciosHab[i] % 2 != 0) {
      numerosImpares.push(preciosHab[i]);
    }
  }
  document.write(numerosImpares);
};

const ejercicio12 = function () {
  const diasFinSemana = dias_semana.slice(5);
  document.write(diasFinSemana);
};

const ejercicio13 = function () {
  preciosAdd.pop();
  preciosAdd.push(543, 634, 234, 734);
};

const ejercicio14 = function () {
  const fruta_precio = frutas.concat(preciosHab);
  const frutasNuevo = [];
  const preciosNuevo = [];
  fruta_precio.forEach(separador);
  function separador(element) {
    if (typeof element != "string") {
      preciosNuevo.push(element * 2);
    } else {
      frutasNuevo.push(`${element}*`);
    }
  }
  document.write(fruta_precio);
  document.write("<br>");
  document.write(frutasNuevo);
  document.write("<br>");
  document.write(preciosNuevo);
};

const ejercicio15 = function () {
  const serieFib = [1];
  const sol = [0, 1];
  for (let i = 2; i <= 12; i++) {
    sol[i] = sol[i - 1] + sol[i - 2];
    serieFib.push(sol[i]);
  }

  document.write(serieFib);
};
