//EJERCICIO: u3e3_formatofechas
//Crea un programa que muestre la fecha actual en diferentes formatos, según el valor que meta el usuario por parámetro:
//1) 17/02/2016
//2) Miércoles, 17 de febrero de 2016.
//3) Wednesday, February 17, 2016.

function displayDate(format) {
  let today = new Date();
  let options = {
    1: {
      day: ("0" + today.getDate()).slice(-2),
      month: ("0" + (today.getMonth() + 1)).slice(-2),
      year: today.getFullYear(),
    },
    2: {
      day: today.toLocaleDateString("es-ES", { weekday: "long" }),
      date: today.toLocaleDateString("es-ES", { day: "numeric" }),
      month: today.toLocaleDateString("es-ES", { month: "long" }),
      year: today.getFullYear(),
    },
    3: {
      day: today.toLocaleDateString("en-US", { weekday: "long" }),
      date: today.toLocaleDateString("en-US", { day: "numeric" }),
      month: today.toLocaleDateString("en-US", { month: "short" }),
      year: today.getFullYear(),
    },
  };

  let dateFormat = options[format];
  if (!dateFormat) {
    console.log("Invalid format. Please choose either 1, 2, or 3.");
    return;
  }

  switch (format) {
    case "1":
      console.log(`${dateFormat.month}/${dateFormat.day}/${dateFormat.year}`);
      break;
    case "2":
      console.log(
        `${dateFormat.day}, ${dateFormat.month} ${dateFormat.date}, ${dateFormat.year}`
      );
      break;
    case "3":
      console.log(
        `${dateFormat.day}, ${dateFormat.month} ${dateFormat.date}, ${dateFormat.year}`
      );
      break;
    default:
      break;
  }
}
