//EJERCICIO: u3e5_math
//Crea un programa que pida al usuario que elija una opción del siguiente menú:
//1) Potencia.
//2) Raíz.
//3) Redondeo.
//4) Trigonometría.
//Si el usuario introduce 1, se le deberá pedir una base y un exponente y se mostrará el resultado en pantalla (La potencia de X elevado a Y es: )
//Si el usuario introduce 2, se le pedirá un número (no negativo) y se mostrará el resultado en pantalla (La raíz de X es: )
//Si el usuario introduce 3, se le pedirá un decimal por pantalla y se mostrará el redondeo al entero más próximo, al alta y a la baja.
//Si el usuario introduce 4, se le pedirá un ángulo (entre 0 y 360) y se le mostrarán por pantalla los valores trigonométricos del seno, coseno y tangente.

function calculator() {
  let option = prompt(
    "Please choose an option from the following menu:\n1) Power\n2) Root\n3) Rounding\n4) Trigonometry"
  );

  switch (option) {
    case "1":
      let base = parseFloat(prompt("Enter the base:"));
      let exponent = parseFloat(prompt("Enter the exponent:"));
      let result = Math.pow(base, exponent);
      console.log(`The power of ${base} raised to ${exponent} is: ${result}`);
      break;
    case "2":
      let number = parseFloat(prompt("Enter a non-negative number:"));
      if (number < 0) {
        console.log("Invalid input. Please enter a non-negative number.");
      } else {
        let result = Math.sqrt(number);
        console.log(`The root of ${number} is: ${result}`);
      }
      break;
    case "3":
      let decimal = parseFloat(prompt("Enter a decimal:"));
      let decimalPlaces = parseInt(
        prompt("Enter the number of decimal places to round to:")
      );
      let rounded = decimal.toFixed(decimalPlaces);
      console.log(
        `The rounded value (to ${decimalPlaces} decimal places) of ${decimal} is: ${rounded}`
      );
      break;
    case "4":
      let angle = parseFloat(prompt("Enter an angle between 0 and 360:"));
      if (angle < 0 || angle > 360) {
        console.log("Invalid input. Please enter an angle between 0 and 360.");
      } else {
        let radians = (angle * Math.PI) / 180;
        let sin = Math.sin(radians);
        let cos = Math.cos(radians);
        let tan = Math.tan(radians);
        console.log(`The sine of ${angle} is: ${sin}`);
        console.log(`The cosine of ${angle} is: ${cos}`);
        console.log(`The tangent of ${angle} is: ${tan}`);
      }
      break;
    default:
      console.log("Invalid option. Please choose an option from the menu.");
      break;
  }
}
