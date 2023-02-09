"use strict";

//FUNCIONES PARA LAS COOKIES

//Crea la cookie estableciendo el nombre, el valor y el tiempo de duracion
function setCookie(cName, cValue, daysToLive) {
  const date = new Date();
  date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000);
  let expires = "expires=" + date.toUTCString();
  document.cookie = `${cName}=${cValue};${expires};path=/`;
}
//Borra una cookie por el nombre
function deleteCookie(cName) {
  setCookie(cName, null, null);
}
//Consigue el dato de la cookie con el nombre
function getCookie(cName) {
  let valor = "; " + document.cookie;
  let partes = valor.split("; " + cName + "=");
  if (partes.length == 2) return partes.pop().split(";").shift();
}

//FUNCIONES DE COMPROBACION
//Comprueban los datos, y si pasan, crearan la cookie

// -------- 1 ----------

// Validar nombre
function validarNombre() {
  let name = document.getElementById("nombre").value;
  let nameRegex = /^[A-Z][a-zA-Z ]*$/;
  if (!nameRegex.test(name)) {
    alert(
      "El nombre debe empezar por mayúscula. Si el nombre es compuesto, debe ir separado por espacios"
    );
    document.getElementById("nombre").style.borderColor = "red";
    return false;
  } else {
    setCookie("nombre", name, 1);
    document.getElementById("nombre").style.borderColor = "initial";
    return true;
  }
}

// Validar apellidos
function validarApellidos() {
  let apellidos = document.getElementById("apellidos").value;
  let apellidosRegex = /^[A-Z][a-zA-Z ]*$/;
  if (!apellidosRegex.test(apellidos)) {
    alert(
      "Los apellidos deben empezar por mayúscula e ir separados por algún espacio"
    );
    document.getElementById("apellidos").style.borderColor = "red";
    return false;
  } else {
    setCookie("apellidos", apellidos, 1);
    document.getElementById("apellidos").style.borderColor = "initial";
    return true;
  }
}

// Validar email
function validarEmail() {
  var email = document.getElementById("email").value;
  var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailRegex.test(email)) {
    alert("El email tiene que tener un formato de name@company.extension");
    document.getElementById("email").style.borderColor = "red";
    return false;
  } else {
    setCookie("email", email, 1);
    document.getElementById("email").style.borderColor = "initial";
    return true;
  }
}

// Validar Password
function checkPassword() {
  let password = document.getElementById("password").value;
  let repeatPassword = document.getElementById("repeatPassword");
  if (password.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/)) {
    repeatPassword.disabled = false;
  } else {
    repeatPassword.value = "";
    repeatPassword.disabled = true;
  }
}
function checkRepeatPassword() {
  let password = document.getElementById("password").value;
  let repeatPassword = document.getElementById("repeatPassword").value;
  if (password !== repeatPassword) {
    alert("La contraseña no coincide");
    document.getElementById("repeatPassword").style.borderColor = "red";
    return false;
  } else {
    setCookie("password", password, 1);
    document.getElementById("repeatPassword").style.borderColor = "initial";
    return true;
  }
}

//Muestra la pass cambiando el type del input en html
function showPassword() {
  let password = document.getElementById("password");
  let repeatPassword = document.getElementById("repeatPassword");
  if (password.type === "password") {
    password.type = "text";
    repeatPassword.type = "text";
  } else {
    password.type = "password";
    repeatPassword.type = "password";
  }
}

// Validar checkbox terminos
function vCheckboxTerminos() {
  let terminosCheckbox = document.getElementById("terminos").checked;
  if (!terminosCheckbox) {
    alert("Debes aceptar los terminos y condiciones de la web");
    return false;
  }
  return true;
}

// Ejecuta todas las acciones y si estan bien nos permite pasar al siguiente formulario.
function validarFormularioUno() {
  if (
    !validarNombre() ||
    !validarApellidos() ||
    !validarEmail() ||
    !checkRepeatPassword() ||
    !vCheckboxTerminos()
  ) {
    return false;
  }
  return true;
}

//Funcion para el boton de comenzar
function comenzar() {
  if (validarFormularioUno()) {
    document.getElementById("primero").classList.toggle("hidden");
    document.getElementById("segundo").classList.toggle("hidden");
  }
}

// -------- 2 ----------
// Validar DNI
function validarDNI() {
  let dni = document.getElementById("dni").value;
  let dniRegex = /^\d{8}[a-zA-Z]$/;
  if (!dniRegex.test(dni)) {
    alert("DNI debe tener 8 digitos y 1 letra");
    document.getElementById("dni").style.borderColor = "red";
    return false;
  }
  let letter = dni.substr(-1);
  let number = dni.substr(0, 8);
  let letterArray = "TRWAGMYFPDXBNJZSQVHLCKE";
  let correctLetter = letterArray[number % 23];
  if (letter !== correctLetter) {
    alert("Letra de DNI invalida");
    document.getElementById("dni").style.borderColor = "red";
    return false;
  } else {
    document.getElementById("dni").style.borderColor = "initial";
    setCookie("dni", dni, 1);
    return true;
  }
}

// Validar Telefono
function validarTelefono() {
  let phone = document.getElementById("telefono").value;
  let phoneRegex =
    /^\d{9}$|^\d{3}[\s]\d{3}[\s]\d{3}$|^\d{3}[\s]\d{2}[\s]\d{2}[\s]\d{2}$/;
  if (!phoneRegex.test(phone)) {
    alert(
      "Deben ser 9 dígitos. Estos dígitos se pueden introducir separados por espacios. Por ejemplo, son válidos los siguientes formatos: 123456789, 123 456 789, 123 45 67 89"
    );
    document.getElementById("telefono").style.borderColor = "red";
    return false;
  } else {
    document.getElementById("telefono").style.borderColor = "initial";
    setCookie("telefono", phone, 1);
    return true;
  }
}

//Validar que ha puesto algo en Pais

function validarPais() {
  let pais = document.getElementById("pais").value;
  setCookie("pais", pais, 1);
  return true;
}

// Validar checkbox Privacidad
function vCheckboxPrivacidad() {
  let privacidadCheckbox = document.getElementById("privacidad").checked;
  if (!privacidadCheckbox) {
    alert("Debes aceptar la politica de privacidad");
    document.getElementById("privacidad").style.borderColor = "red";
    return false;
  }
  document.getElementById("privacidad").style.borderColor = "initial";
  return true;
}
// Ejecuta todas las acciones y si estan bien nos permite pasar al siguiente formulario.
function validarFormularioDos() {
  if (
    !validarDNI() ||
    !validarTelefono() ||
    !validarPais() ||
    !vCheckboxPrivacidad()
  ) {
    return false;
  }
  return true;
}

//Funcion para el boton de continuar
function continuar() {
  if (validarFormularioDos()) {
    document.getElementById("segundo").classList.toggle("hidden");
    document.getElementById("tercero").classList.toggle("hidden");
  }
}

//Funcion para el boton de volver
function volver() {
  deleteCookie("nombre");
  deleteCookie("apellidos");
  deleteCookie("email");
  deleteCookie("password");
  document.getElementById("primero").classList.toggle("hidden");
  document.getElementById("segundo").classList.toggle("hidden");
}

// -------- 3 ----------

//Funcion para el boton de volver
function volverDos() {
  deleteCookie("dni");
  deleteCookie("telefono");
  deleteCookie("pais");
  document.getElementById("segundo").classList.toggle("hidden");
  document.getElementById("tercero").classList.toggle("hidden");
}

//Funcion para el boton de finalizar
function finalizar() {
  document.getElementById("tercero").classList.toggle("hidden");
  document.getElementById("final").classList.toggle("hidden");

  //Lee datos de las cookies y las muestra

  let nombre = getCookie("nombre");
  let apellidos = getCookie("apellidos");
  let email = getCookie("email");
  let dni = getCookie("dni");
  let telefono = getCookie("telefono");
  let pais = getCookie("pais");
  let password = getCookie("password");

  document.getElementById("nombreFinal").value = nombre;
  document.getElementById("apellidosFinal").value = apellidos;
  document.getElementById("emailFinal").value = email;
  document.getElementById("dniFinal").value = dni;
  document.getElementById("telefonoFinal").value = telefono;
  document.getElementById("paisFinal").value = pais;
  document.getElementById("passwordFinal").value = password;
}

// -------- 4 ----------

function showPasswordFinal() {
  let password = document.getElementById("passwordFinal");
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
}

function reset() {
  deleteCookie("nombre");
  deleteCookie("apellidos");
  deleteCookie("email");
  deleteCookie("password");
  deleteCookie("dni");
  deleteCookie("telefono");
  deleteCookie("pais");
  document.getElementById("final").classList.toggle("hidden");
  document.getElementById("primero").classList.toggle("hidden");
}

//FUNCION WINDOW ANIMACION

let imgData = [
  "proyectoLogin2.png",
  "proyectoLogin3.png",
  "proyectoLogin4.png",
  "proyectoLogin1.png",
];
function animar() {
  let target = document.getElementById("rightside");
  let nextImg = imgData.shift();
  imgData.push(nextImg);
  target.style.background =
    "linear-gradient(90deg, rgba(30,31,32,1) 0%, rgba(30,31,32,0.9528011888349089) 20%, rgba(30,31,32,0) 100%), url(images/" +
    nextImg;
}
window.setInterval("animar()", 10000);

//FUNCION PARA CONTINUAR CON ENTER

document.addEventListener("keydown", function (e) {
  console.log(e.key);
  const primero = document.getElementById("primero");
  const segundo = document.getElementById("segundo");
  const tercero = document.getElementById("tercero");
  const final = document.getElementById("cuarto");
  if (e.key === "Enter") {
    if (
      !primero.classList.contains("hidden") &&
      segundo.classList.contains("hidden") &&
      tercero.classList.contains("hidden")
    ) {
      comenzar();
    } else if (
      primero.classList.contains("hidden") &&
      !segundo.classList.contains("hidden") &&
      tercero.classList.contains("hidden")
    ) {
      continuar();
    } else if (
      primero.classList.contains("hidden") &&
      segundo.classList.contains("hidden") &&
      !tercero.classList.contains("hidden")
    ) {
      finalizar();
    }
  }
});

// .	Punto: Coincide con cualquier carácter excepto un salto de línea.
// [ ]	Clase de caracteres: Coincide con cualquier carácter contenido entre corchetes.
// [^ ]	Clase de caracteres negados: Coincide con cualquier carácter que no está contenido dentro de los corchetes.
// *	Asterisco: Corresponde con 0 o más repeticiones del símbolo precedente.
// +	Signo de más: Corresponde con 1 o más repeticiones del símbolo precedente.
// ?	Signo de interrogación: Hace que el símbolo precedente sea opcional.
// {n,m}	Llaves: Corresponde al menos "n" pero no más de "m" repeticiones del símbolo precedente.
// (xyz)	Grupo de caracter: Hace coincidir los caracteres xyz en ese orden exacto.
// |	Alternancia: Corresponde a los caracteres anteriores o los caracteres después del símbolo.
// \	Escapa el siguiente carácter: Esto le permite hacer coincidir los caracteres reservados [ ] ( ) { } . * + ? ^ $ \ |
// ^	Acento circunflejo: Hace coincidir el principio de la entrada.
// $	Símbolo de dólar: Corresponde al final de la entrada.

//Exprexiones comunes

// Solo numeros: ^[0-9]+$

// Solo letras: ^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$

// Letras con espacios: ^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$

// Nombres y Apellidos: ^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$

// Precio: ^[0-9]+[.,]{1,1}\[0]{2,2}$

// Numeros enteros y decimales: ^\d*\.\d+$

// Numeros enteros positivos y negativos : ^-?\d*(\.\d+)?$

// Separador de miles y decimales :^(?!0+\.00)(?=.{1,9}(\.|$))(?!0(?!\.))\d{1,3}(,\d{3})*(\.\d+)?$

// Fecha (dd/mm/yyyy): ^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$

// Horario (Formato 12h): ((1[0-2]|0?[1-2]):([0-5][0-9]) ?([AaPp][Mm]))

// Horario (Formato 24h): ^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$

// Contraseña Fuerte ( caracter especial ): (?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}

// Nombres usuario : ^[a-z0-9_-]{3,16}$

// Validacion email : ^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$

// Validacion URL: ^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$

// Validacion IPv4 : ^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$

// Validacion hexadecimal : ^#?([a-f0-9]{6}|[a-f0-9]{3})$
