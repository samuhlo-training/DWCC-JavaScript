function crearDocumento() {
  // Elementos principales
  const body = document.getElementById("cuerpo");
  const div = document.createElement("div");
  const form = document.createElement("form");

  // Ponemos los atributos
  form.setAttribute("onsubmit", "return validarFormulario()");
  div.setAttribute("class", "registro");
  const password = document.createElement("input");
  const repeatPassword = document.createElement("input");
  const checkbox1 = document.createElement("input");
  const checkbox2 = document.createElement("input");
  const checkbox3 = document.createElement("input");
  const nombre = document.createElement("input");
  const email = document.createElement("input");
  const label1 = document.createElement("label");
  const label2 = document.createElement("label");
  const br1 = document.createElement("br");
  const br2 = document.createElement("br");
  const br3 = document.createElement("br");
  const br4 = document.createElement("br");
  const br5 = document.createElement("br");
  const br6 = document.createElement("br");

  const crearCuenta = document.createElement("input");

  nombre.setAttribute("type", "text");
  nombre.setAttribute("id", "nombre");
  nombre.setAttribute("name", "nombre");
  nombre.setAttribute("placeholder", "Nombre ");
  nombre.setAttribute("width", "40");

  email.setAttribute("type", "text");
  email.setAttribute("id", "email");
  email.setAttribute("name", "email");
  email.setAttribute("placeholder", "* Email ");

  password.setAttribute("type", "password");
  password.setAttribute("id", "password");
  password.setAttribute("oninput", "checkPassword()");
  password.setAttribute("required", "");
  password.setAttribute("pattern", "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,}");
  password.setAttribute("placeholder", "* Contraseña");

  repeatPassword.setAttribute("type", "password");
  repeatPassword.setAttribute("id", "repeatPassword");
  repeatPassword.setAttribute("disabled", "");
  repeatPassword.setAttribute("placeholder", "* Repetir contraseña");

  checkbox1.setAttribute("type", "checkbox");
  checkbox1.setAttribute("class", "checkbox");
  checkbox1.setAttribute("onchange", "showPassword()");

  checkbox2.setAttribute("type", "checkbox");
  checkbox2.setAttribute("class", "checkbox");
  checkbox2.setAttribute("id", "privacidad");
  checkbox2.setAttribute("name", "privacidad");
  checkbox2.setAttribute("value", "privacidad");

  label1.setAttribute("for", "privacidad");

  checkbox3.setAttribute("type", "checkbox");
  checkbox3.setAttribute("class", "checkbox");
  checkbox3.setAttribute("id", "descuentos");
  checkbox3.setAttribute("name", "descuentos");
  checkbox3.setAttribute("value", "descuentos");

  label2.setAttribute("for", "descuentos");

  crearCuenta.setAttribute("class", "crear_cuenta");
  crearCuenta.setAttribute("type", "submit");
  crearCuenta.setAttribute("value", "Crear cuenta");

  // Vamos añadiendo los hijos.
  body.appendChild(div);
  div.appendChild(form);
  form.appendChild(nombre);
  form.appendChild(br1);
  form.appendChild(email);
  form.appendChild(br2);
  form.appendChild(password);
  form.appendChild(br3);
  form.appendChild(repeatPassword);
  form.appendChild(br4);
  form.appendChild(checkbox1);
  form.appendChild(document.createTextNode(" Mostrar contraseña"));
  form.appendChild(br5);
  form.appendChild(checkbox2);
  form.appendChild(label1).innerHTML =
    "He leido y acepto la <u>politica de privacidad</u> ";
  form.appendChild(br6);
  form.appendChild(checkbox3);
  form.appendChild(label2).innerHTML =
    "Recibir <strong>descuentos exclusivos</strong>, novedades y tendencias por e-mail. Me puedo dar de baja desde mi panel";

  form.appendChild(crearCuenta);
}

//FUNCIONES DEL FORMULARIO
function validarNombre() {
  var name = document.getElementById("nombre").value;
  var nameRegex = /^[A-Z][a-zA-Z ]*$/;
  if (!nameRegex.test(name)) {
    alert(
      "El nombre debe empezar por mayúscula. Si el nombre es compuesto, debe ir separado por espacios"
    );
    return false;
  }
  return true;
}

function validarEmail() {
  var email = document.getElementById("email").value;
  var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailRegex.test(email)) {
    alert("El email tiene que tener un formato de name@company.extension");
    return false;
  }
  return true;
}
function checkPassword() {
  let password = document.getElementById("password").value;
  let repeatPassword = document.getElementById("repeatPassword");
  if (password.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/)) {
    repeatPassword.disabled = false;
  } else {
    repeatPassword.disabled = true;
  }
}
function checkRepeatPassword() {
  let password = document.getElementById("password").value;
  let repeatPassword = document.getElementById("repeatPassword").value;
  if (password !== repeatPassword) {
    alert("La contraseña no coincide");
  }
}
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

function validarFormulario() {
  if (!validarNombre() || !validarEmail() || !checkRepeatPassword()) {
    return false;
  }
  return true;
}
