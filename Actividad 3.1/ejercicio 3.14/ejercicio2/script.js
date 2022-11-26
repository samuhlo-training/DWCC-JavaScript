let fechaActual = new Date();
console.log(fechaActual);
const resultado = document.getElementById("fechas");
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

function padTo2Digits(num) {
  return num.toString().padStart(2, "0");
}

function formatDate(date) {
  return [
    padTo2Digits(date.getDate()),
    padTo2Digits(date.getMonth() + 1),
    date.getFullYear(),
  ].join("/");
}

const fecha1 = formatDate(fechaActual);
console.log(fecha1);
const fecha2 = fechaActual.toLocaleDateString("es-ES", options);
console.log(fecha2);
const fecha3 = fechaActual.toLocaleDateString("en-EN", options);
console.log(fecha3);

resultado.innerHTML = `${fecha1}<br>${fecha2}<br>${fecha3}`;
