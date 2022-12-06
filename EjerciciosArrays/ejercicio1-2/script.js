const arr1 = [
  "España",
  "Francia",
  "Suecia",
  "Italia",
  "Noruega",
  "Portugal",
  "Holanda",
];
const arr2 = ["Alemania", "Dinamarca", "Grecia", "Suiza"];

//const arrResultante = arr1
// .concat(arr2)
//  .splice(1)
// .sort();
const arrResultante = arr1.concat(arr2).splice(1).sort();
arrResultante.unshift("Belgica");
//arrResultante.shift();
//arrResultante.sort().unshift("Belgica");
console.log(arrResultante);
const respuesta1 = document.getElementById("resultado1");
const respuesta2 = document.getElementById("resultado2");
respuesta1.innerHTML = arrResultante;
const opciones = `Selecciona una opcion : 

1. Mostrar número de países.

2. Mostrar listado de países. 

3. Mostrar un intervalo de países. 

4. Añadir un país. 

5. Borrar un país. 

6. Consultar un país. `;

function mostrarOpciones() {
  let respuestaOpcion = Number(prompt(opciones));

  switch (respuestaOpcion) {
    case 1:
      respuesta2.innerHTML = arrResultante.length;
      break;
    case 2:
      let subOpcion2 = Number(
        prompt(`Elige una opcion :
  
      1. En el orden en el que se encuentran actualmente en el array.
  2. En orden inverso al actual.
  3. Ordenados alfabéticamente.`)
      );
      switch (subOpcion2) {
        case 1:
          respuesta2.innerHTML = arrResultante;
          break;
        case 2:
          const arrReverse = arrResultante.reverse();
          respuesta2.innerHTML = arrReverse;
          break;
        case 3:
          const arrAlfabetica = arrResultante.sort();
          respuesta2.innerHTML = arrAlfabetica;
          break;

        default:
          respuesta2.innerHTML = `Introduce una opcion valida, por favor`;
          break;
      }
      break;
    case 3:
      let inicio = Number(prompt("Introduce el incio del intervalo"));
      let fin = Number(prompt("Introduce el fin"));
      const intervalo = arrResultante.slice(inicio, fin);
      respuesta2.innerHTML = intervalo;
      break;
    case 4:
      let suboOpcion4 = Number(
        prompt(`Elige una opcion:
  
      1. Añadir al principio
      2. Añadir al final`)
      );
      let paisAdd = prompt("Que pais quieres añadir??");
      if (suboOpcion4 == 1) {
        arrResultante.unshift(paisAdd);
        respuesta2.innerHTML = `Se ha añadido ${paisAdd} al principio`;
      } else if (suboOpcion4 == 2) {
        arrResultante.push(paisAdd);
        respuesta2.innerHTML = `Se ha añadido ${paisAdd} al final`;
      } else {
        respuesta2.innerHTML = `Introduce una opcion valida, por favor`;
      }
      break;
    case 5:
      let suboOpcion5 = Number(
        prompt(`Elige una opcion:
  
      1. Borrar al principio
      2. Borrar al final`)
      );
      if (suboOpcion5 === 1) {
        const paisBorrado = arrResultante.shift();
        respuesta2.innerHTML = `Se ha borrado ${paisBorrado} al principio`;
      } else if (suboOpcion5 === 2) {
        const paisBorrado = arrResultante.pop();
        respuesta2.innerHTML = `Se ha borrado ${paisBorrado} al final`;
      } else {
        respuesta2.innerHTML = `Introduce una opcion valida, por favor`;
      }
      break;
    case 6:
      let suboOpcion6 = Number(
        prompt(`Elige una opcion :
      
      1. Consulta por nombre
      2. Consulta por posicion`)
      );
      if (suboOpcion6 === 1) {
        let consulta1 = prompt(`Introduce el nombre del pais :`);
        const paisNombre = arrResultante.indexOf(consulta1);
        if (paisNombre === -1) {
          respuesta2.innerHTML = `El pais ${consulta1} no esta en la lista.`;
        } else {
          respuesta2.innerHTML = `El pais ${consulta1} esta en la posicion ${
            paisNombre + 1
          }`;
        }
      } else if (suboOpcion6 === 2) {
        let consulta2 = Number(
          prompt("Introduce la posicion del pais que quieres saber")
        );
        const paisPosicion = arrResultante[consulta2 - 1];
        respuesta2.innerHTML = `El pais en la posicion ${consulta2} es ${paisPosicion}`;
      } else {
        respuesta2.innerHTML = `Introduce una opcion valida, por favor`;
      }
      break;

    default:
      respuesta2.innerHTML = `Introduce una opcion valida, por favor`;
      break;
  }
}

//Bélgica, Alemania,Dinamarca, Francia, Grecia, Holanda, Italia, Noruega, Portugal, Suecia,Suiza.
