"use stric";

const resultado = document.getElementById("resultado");

const limpiar = () => (resultado.innerHTML = " ");

const cogerDatos = function () {
  const nombre = String(document.getElementById("nombre").value).split(" ");
  const apellidos = String(document.getElementById("apellidos").value).split(
    " "
  );
  console.log(nombre);
  console.log(apellidos);
  return {
    nombre: nombre,
    apellidos: apellidos,
  };
};

function opcion1() {
  limpiar();
  let datos = cogerDatos();
  const longitud = datos.nombre.concat(datos.apellidos).join("").length;
  resultado.innerHTML = longitud;
}

function opcion2() {
  limpiar();
  let datos = cogerDatos();
  const minuscula = datos.nombre
    .concat(datos.apellidos)
    .join(" ")
    .toLowerCase();
  const mayusculas = datos.nombre
    .concat(datos.apellidos)
    .join(" ")
    .toUpperCase();
  resultado.innerHTML = `Minusculas : ${minuscula} <br>
  Mayusculas : ${mayusculas}`;
}

function opcion3() {
  limpiar();
  let datos = cogerDatos();
  const temp = [
    datos.nombre[0].charAt(0),
    datos.apellidos[0],
    datos.apellidos[1].charAt(0),
  ];
  const nombreUsuario = temp.join("");
  resultado.innerHTML = `Nombre : ${datos.nombre[0]} <br> Apellido 1 : ${datos.apellidos[0]} <br> Apellido 2 : ${datos.apellidos[1]} <br> Sugerencia nombre usuario : ${nombreUsuario}`;
}
