//EJERCICIO: u3e9_contrasena
//Crea un programa que pida al usuario una propuesta de contraseña y compruebe si cumple con los siguientes requisitos.
//Tiene entre 8 y 16 caracteres.
//Tiene una letra mayúscula.
//Tiene una letra minúscula.
//Tiene un número.
//Tiene uno de los siguientes valores: guión alto, guión bajo, arroba, almohadilla, dólar, tanto por ciento o ampersand.
//Si cumple con todos los requisitos se considera una contraseña segura, de lo contrario mostrará que es una contraseña no segura.

const password = prompt("Enter a password:");

let lengthCheck = password.length >= 8 && password.length <= 16;
let hasUppercase = false;
let hasLowercase = false;
let hasNumber = false;
let hasSpecialCharacter = false;
const specialCharacters = ["_", "@", "#", "$", "^", "&"];

for (let i = 0; i < password.length; i++) {
  let char = password[i];
  if (char >= "A" && char <= "Z") {
    hasUppercase = true;
  } else if (char >= "a" && char <= "z") {
    hasLowercase = true;
  } else if (char >= "0" && char <= "9") {
    hasNumber = true;
  } else if (specialCharacters.includes(char)) {
    hasSpecialCharacter = true;
  }
}

let isStrongPassword =
  lengthCheck &&
  hasUppercase &&
  hasLowercase &&
  hasNumber &&
  hasSpecialCharacter;

if (isStrongPassword) {
  console.log("Your password is strong");
} else {
  console.log("Your password is insecure");
}
