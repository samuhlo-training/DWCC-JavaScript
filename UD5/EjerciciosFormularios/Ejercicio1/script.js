// Validar nombre
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

// Validar apellidos
function validarApellidos() {
  var apellidos = document.getElementById("apellidos").value;
  var apellidosRegex = /^[A-Z][a-zA-Z ]*$/;
  if (!apellidosRegex.test(apellidos)) {
    alert(
      "Los apellidos deben empezar por mayúscula e ir separados por algún espacio"
    );
    return false;
  }
  return true;
}

// Validar email
function validarEmail() {
  var email = document.getElementById("email").value;
  var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailRegex.test(email)) {
    alert("El email tiene que tener un formato de name@company.extension");
    return false;
  }
  return true;
}

// Validar Telefono
function validarTelefono() {
  var phone = document.getElementById("telefono").value;
  var phoneRegex =
    /^\d{9}$|^\d{3}[\s]\d{3}[\s]\d{3}$|^\d{3}[\s]\d{2}[\s]\d{2}[\s]\d{2}$/;
  if (!phoneRegex.test(phone)) {
    alert(
      "Deben ser 9 dígitos. Estos dígitos se pueden introducir separados por espacios. Por ejemplo, son válidos los siguientes formatos: 123456789, 123 456 789, 123 45 67 89"
    );
    return false;
  }
  return true;
}

// Validar formulario
function validarFormulario() {
  if (
    !validarNombre() ||
    !validarApellidos() ||
    !validarEmail() ||
    !validarTelefono()
  ) {
    return false;
  }
  return true;
}
