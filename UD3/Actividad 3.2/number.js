//EJERCICIO: u3e7_number
//Crea un programa que pida al usuario un número entero por pantalla y muestre:
//Su valor exponencial.
//El número con 4 decimales.
//El número en binario.
//El número en octal.
//El número en hexadecimal.
//Utiliza para ello los métodos del objeto Number.

const getNumber = () => {
  return parseInt(prompt("Enter an integer: "));
};

const main = () => {
  const number = getNumber();
  const exponential = number ** 2;
  const decimal = number.toFixed(4);
  const binary = number.toString(2);
  const octal = number.toString(8);
  const hexadecimal = number.toString(16);

  console.log(`The exponential value of ${number} is: ${exponential}`);
  console.log(`The number with 4 decimal places: ${decimal}`);
  console.log(`The binary representation of ${number} is: ${binary}`);
  console.log(`The octal representation of ${number} is: ${octal}`);
  console.log(`The hexadecimal representation of ${number} is: ${hexadecimal}`);
};

main();
