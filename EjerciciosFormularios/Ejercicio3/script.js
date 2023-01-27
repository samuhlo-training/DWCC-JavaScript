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
