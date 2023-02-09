//EJERCICIO: u3e4_formatohoras
//Crea un programa que muestre la hora actual en diferentes formatos, según el valor que meta el usuario por parámetro:
//1) 14:35:07 (hora detallada con minutos y segundos)
//2) 02:35 PM o 02:35:07 AM (hora con minutos y AM o PM según sea antes o después del mediodía).

function displayTime(format) {
  let today = new Date();
  let options = {
    1: {
      hours: ("0" + today.getHours()).slice(-2),
      minutes: ("0" + today.getMinutes()).slice(-2),
      seconds: ("0" + today.getSeconds()).slice(-2),
    },
    2: {
      hours: today.getHours(),
      minutes: today.getMinutes(),
      ampm: today.getHours() >= 12 ? "PM" : "AM",
    },
  };

  let timeFormat = options[format];
  if (!timeFormat) {
    console.log("Invalid format. Please choose either 1 or 2.");
    return;
  }

  switch (format) {
    case "1":
      console.log(
        `${timeFormat.hours}:${timeFormat.minutes}:${timeFormat.seconds}`
      );
      break;
    case "2":
      console.log(
        `${("0" + (timeFormat.hours % 12) || 12).slice(-2)}:${(
          "0" + timeFormat.minutes
        ).slice(-2)} ${timeFormat.ampm}`
      );
      break;
    default:
      break;
  }
}
