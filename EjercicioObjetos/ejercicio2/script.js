"use strict";

const equipoFutbol = new Array();
const respuesta = document.getElementById("respuesta");

function crearJugador() {
  let nombreJugador = document.getElementById("nombreJugador").value;
  let dorsalJugador = document.getElementById("dorsalJugador").value;
  let pesoJugador = document.getElementById("pesoJugador").value;
  let alturaJugador = document.getElementById("alturaJugador").value;

  const jugador = {
    nombre: nombreJugador,
    dorsal: dorsalJugador,
    peso: pesoJugador,
    altura: alturaJugador,
  };
  equipoFutbol.push(jugador);
  console.log(equipoFutbol);
  return jugador;
}

function mostrarEquipo() {
  const ordenadosDorsal = equipoFutbol.sort((a, b) => a.dorsal - b.dorsal);
  for (let i = 0; i < ordenadosDorsal.length; i++) {
    respuesta.innerHTML += `<strong>Nombre</strong> : ${ordenadosDorsal[i].nombre}<br>
    <strong>Dorsal</strong> : ${ordenadosDorsal[i].dorsal}<br>
    <strong>Peso</strong> : ${ordenadosDorsal[i].peso}<br>
    <strong>Altura</strong> : ${ordenadosDorsal[i].altura}<br><br>`;
  }
}
