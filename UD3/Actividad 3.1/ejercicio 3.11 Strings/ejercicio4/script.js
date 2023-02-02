"use strict";

const resultado = document.getElementById("resultado");

const limpiar = () => (resultado.innerHTML = " ");

function cogerDatos() {
  const conjuntoDatos = String(document.getElementById("datos").value).split(
    ":"
  );
  return {
    nombre: conjuntoDatos[0],
    apellidos: conjuntoDatos[1],
    telefono: conjuntoDatos[2],
    email: conjuntoDatos[3],
    cp: conjuntoDatos[4],
  };
}

function exponer() {
  limpiar();
  const datos = cogerDatos();
  console.log(datos);
  const emailTemp = datos.email.split("@");
  const servidor = emailTemp[1];
  resultado.innerHTML = `CP : ${datos.cp} <br> Apellidos : ${datos.apellidos} <br> e-Mail : ${datos.email} <br> Servidor : ${servidor} `;
}

//samuel:lopez lopez:687390547:basuradelsuelo@gmail.com:27002
