//EJERCICIO: u3e8_nombreapellidos
//Crea un programa que pida al usuario su nombre y apellidos y muestre:
//El tamaño del nombre más los apellidos (sin contar espacios).
//La cadena en minúsculas y en mayúsculas.
//Que divida el nombre y los apellidos y los muestre en 3 líneas, donde ponga Nombre: / Apellido 1: / Apellido 2:
//Una propuesta de nombre de usuario, compuesto por la inicial del nombre, el primer apellido y la inicial del segundo apellido: ej. Para Laura Folgado Galache sería lfolgadog.
//Una propuesta de nombre de usuario compuesto por las tres primeras letras del nombre y de los dos apellidos: ej. Laufolgal.

const getName = (promptText) => {
  return prompt(promptText);
};

const main = () => {
  const firstName = getName("Enter your first name: ");
  const lastName1 = getName("Enter your first last name: ");
  const lastName2 = getName("Enter your second last name: ");

  const nameLength = firstName.length + lastName1.length + lastName2.length;
  const lowerCase = (firstName + lastName1 + lastName2).toLowerCase();
  const upperCase = (firstName + lastName1 + lastName2).toUpperCase();

  console.log(`The length of the first name and last name is: ${nameLength}`);
  console.log(`In lower case: ${lowerCase}`);
  console.log(`In upper case: ${upperCase}`);
  console.log("First Name: " + firstName);
  console.log("Last Name 1: " + lastName1);
  console.log("Last Name 2: " + lastName2);
  console.log(
    "Username proposal 1: " + firstName[0] + lastName1 + lastName2[0]
  );
  console.log(
    "Username proposal 2: " +
      firstName.substr(0, 3) +
      lastName1.substr(0, 3) +
      lastName2.substr(0, 3)
  );
};

main();
