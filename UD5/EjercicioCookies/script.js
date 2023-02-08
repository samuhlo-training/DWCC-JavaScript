"use strict";

function guardarFormulario() {
  // Coje el nombre y el apellido de los inputs
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;

  // Guarda el nombre y el apellido como cookies
  document.cookie = "nombre=" + nombre;
  document.cookie = "apellido=" + apellido;

  // Muestra el nombre y el apellido guardado al momento
  //document.getElementById("nombreGuardado").value = nombre;
  //document.getElementById("apellidoGuardado").value = apellido;

  // Incrementa las pulsaciones cada vez que es presionado, actualizando la cookie de pulsaciones.
  let pulsaciones = parseInt(getCookie("pulsaciones")) || 0;
  pulsaciones++;
  document.cookie = "pulsaciones=" + pulsaciones;
  document.getElementById("pulsaciones").innerHTML = pulsaciones;
}

// Funcion para conseguir los valores de la cookie
function getCookie(cookieName) {
  let valor = "; " + document.cookie;
  let partes = valor.split("; " + cookieName + "=");
  if (partes.length == 2) return partes.pop().split(";").shift();
}

window.onload = function () {
  // Muestra al cargar la pagina el ultimo nombre y apellido guardado
  let nombre = getCookie("nombre");
  let apellido = getCookie("apellido");
  if (nombre && apellido) {
    document.getElementById("nombreGuardado").value = nombre;
    document.getElementById("apellidoGuardado").value = apellido;
  }

  // Muestra las veces que fue pulsado el boton
  let pulsaciones = getCookie("pulsaciones");
  if (pulsaciones) {
    document.getElementById("pulsaciones").value = pulsaciones;
  }
};
