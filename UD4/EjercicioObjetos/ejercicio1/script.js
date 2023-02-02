"use strict";

const respuesta = document.getElementById("respuesta");
console.log(respuesta);

const alumno = {
  nombre: "Jesus Martinez Martinez",
  dni: "33344455Z",
  fechaNacimiento: "01/01/1990",
  modulos: ["DWCC", "FOL", "DWCS"],
};

function matricular(modulo) {
  alumno.modulos.push(modulo);
  respuesta.innerHTML = alumno.modulos;
  return alumno.modulos;
}
function desmatricular(modulo) {
  let posicion = alumno.modulos.indexOf(modulo);
  console.log(posicion);
  alumno.modulos.splice(posicion, 1);
  respuesta.innerHTML = alumno.modulos;
  return alumno.modulos;
}
