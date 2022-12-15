"use strict";

const resultado = document.getElementById("resultado");

const limpiar = () => (resultado.innerHTML = " ");

function validar() {
  let password = String(document.getElementById("password").value);
  var myregex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,16}/;
  if (myregex.test(password)) {
    resultado.innerHTML = "Es valida";
    return true;
  } else {
    resultado.innerHTML = "No es valida";
    return false;
  }
}
