"use strict";

const respuesta = document.getElementById("respuesta");

// 9588KPW - matricula coche
// Reserva parkin E4VKO

function ordenarFechas() {
  const fechas = [
    new Date("July 20, 2021 20:17:40"),
    new Date("August 19, 2023 23:15:30"),
    new Date("March 13, 2024 04:20"),
    new Date(),
  ];
  fechas.sort((date1, date2) => date1 - date2);
  console.log(fechas);
  for (let x = 0; x < fechas.length; x++) {
    // const parrafo = document.createElement("p");
    // const text = document.createTextNode(fechas[x]);
    // parrafo.append(text);
    // respuesta.append(parrafo);
    respuesta.innerHTML += `${fechas[x]}<br><br>`;
  }
}
