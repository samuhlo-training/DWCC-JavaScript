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
    document.getElementById("nombre").style.borderColor = "initial";
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
    document.getElementById("email").style.borderColor = "initial";
    return true;
  }
}
// Validar checkbox terminos
function vCheckboxTerminos() {
  let terminosCheckbox = document.getElementById("terminos").checked;
  if (!terminosCheckbox) {
    alert("Debes aceptar los terminos");
    return false;
  }
  return true;
}

//Validar telefono
function validarTelefono() {
  let telefono = document.getElementById("telefono").value;
  //let telefonoRegex =/^\d{9}$|^\d{3}[\s]\d{3}[\s]\d{3}$|^\d{3}[\s]\d{2}[\s]\d{2}[\s]\d{2}$/;
  let telefonoRegex = /^(\+34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}$/;
  if (!telefonoRegex.test(telefono)) {
    alert(
      "Debe ser un numero de 9 cifras, que empiece por 6 o 9, puede llevar el prefijo +34"
    );
    document.getElementById("telefono").style.borderColor = "red";
    return false;
  } else {
    return true;
  }
}

function validarFormulario() {
  if (
    !validarNombre() ||
    !validarEmail() ||
    !validarTelefono() ||
    !vCheckboxTerminos()
  ) {
    return false;
  }
  return true;
}
