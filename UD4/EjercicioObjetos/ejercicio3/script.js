"use strict";

function addProducto() {
  const nombreValue = document.getElementById("nombre").value;
  const cantidadValue = document.getElementById("cantidad").value;
  const precioValue = document.getElementById("precio").value;

  const producto = {
    nombre: nombreValue,
    cantidad: cantidadValue,
    precio: precioValue,
  };
  console.log(producto);

  compra.producto.push(producto);
  compra.precioTotal = compra.precioTotal + precioTotalProducto(producto);
  console.log(compra);
}

function precioTotalProducto(producto) {
  return producto.precio * producto.cantidad;
}

const compra = {
  producto: [],
  precioTotal: 0,
};

//   function () {
//     for (let x = 0; x < this.producto.length; x++) {
//       let total = +precioTotalProducto(this.producto[x]);
//     }
//     return total;

function mostrarCompra() {
  let stringTabla =
    "<tr><th><strong>PRODUCTO</strong></th><th><strong>PRECIO</strong></th><th><strong>CANTIDAD</strong></th></tr>";
  for (let x = 0; x < compra.producto.length; x++) {
    let fila = "<tr> <td>";
    fila += compra.producto[x].nombre;
    fila += "</td>";
    fila += "<td>";
    fila += compra.producto[x].precio;
    fila += "</td>";
    fila += "<td>";
    fila += compra.producto[x].cantidad;
    fila += "</td>";
    fila += "</tr>";
    stringTabla += fila;
  }
  let filaTotal = "<tr><td>PRECIO TOTAL:</td><td style='color:red;'>";
  filaTotal += compra.precioTotal;
  filaTotal += "</td></tr>";
  stringTabla += filaTotal;
  document.getElementById("listaCompra").innerHTML = stringTabla;
}
