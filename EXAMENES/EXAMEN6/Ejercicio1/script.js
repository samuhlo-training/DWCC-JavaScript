"use strict";

const table = document.createElement("table");
const cabezera = document.createElement("tr");
let listaCabezera = ["codigo", "nombre", "descripcion", "precio_unidad"];
for (let i = 0; i < listaCabezera.length; i++) {
  const th = document.createElement("th");
  th.innerHTML = listaCabezera[i];
  table.appendChild(th);
}
document.body.appendChild(table);
for (let i = 0; i < 3; i++) {
  const tr = document.createElement("tr");
  for (let j = 0; j < 4; j++) {
    const td = document.createElement("td");

    td.textContent = `dato(${i + 1},${j})`;
    tr.appendChild(td);
  }
  table.appendChild(tr);
}

let datosNuevaFila = ["023", "teclado", "un teclado", "23.50"];

function nuevaFila(array) {
  const fila = document.createElement("tr");
  for (let x = 0; x < array.length; x++) {
    const td = document.createElement("td");
    td.innerHTML = array[x];
    table.appendChild(td);
  }
}

nuevaFila(datosNuevaFila);
