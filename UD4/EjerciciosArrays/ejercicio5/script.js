"use strict";
const respuestaNombre = document.getElementById("respuestaNombre");
const respuestaPass = document.getElementById("respuestaPass");
const validar = function () {
  const nombre = Array.from(document.getElementById("nombre").value);
  const password = Array.from(document.getElementById("password").value);
  const validarPassword = function (array) {
    let password = array.join("");
    const myregex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]/;
    if (myregex.test(password)) {
      respuestaPass.innerHTML = "La contraseña es valida";
      respuestaPass.setAttribute("class", "true");
      return true;
    } else {
      respuestaPass.innerHTML = "La contraseña no es valida";
      respuestaPass.setAttribute("class", "false");
      return false;
    }
  };
  const validarNombre = function (array) {
    let nombre = array.join("");
    const myregex = /^[0-9a-z]+$/g;
    if (myregex.test(nombre)) {
      respuestaNombre.innerHTML = "El nombre es valido";
      respuestaNombre.setAttribute("class", "true");
      return true;
    } else {
      respuestaNombre.innerHTML = "El nombre no es valido";
      respuestaNombre.setAttribute("class", "false");
      return false;
    }
  };
  validarNombre(nombre);
  validarPassword(password);
};
