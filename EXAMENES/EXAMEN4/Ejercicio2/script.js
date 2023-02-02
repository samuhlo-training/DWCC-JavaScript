"use strict";
// Se pretende gestionar los pedidos de una tienda online que consta de Clientes, Productos y Pedidos con la siguiente estructura:

// Producto(nombre, descripción, precio unitario, id) donde id es un numero entero.
// Clientes(nombre, apellido, dni, email).
// Pedido (cesta): Esta formado por una lista de productos.
// El programa ha de contemplar lo siguiente:
// Los clientes y productos han de ser objetos y deberán de disponer de su propio constructor.
// Crea una lista de productos y otra de clientes
// Haz una lista de pedidos (cesta), uno por cada cliente. Se valorará usar un array bidimensional.
// Crea sendas funciones  para dar de alta y de baja (eliminar) tanto productos como clientes de sus respectivas listas.
// Crea una función para insertar un nuevo producto en la cesta y otra para quitar de la cesta un determinado producto de un cliente.
// Para probar, crea 3 clientes , 5 productos y 3 pedidos (de tres clientes). Añade  dos productos a la primera cesta, dos productos a la segunda y uno a la tercera cesta y presenta el contenido de las cestas.

const listaClientes = new Array();
const listaProductos = new Array();

const crearCliente = function (nombre, apellido, dni, email) {
  const cliente = {
    nombre: nombre,
    apellido: apellido,
    dni: dni,
    email: email,
  };
  return cliente;
};

const crearProducto = function (nombre, descripcion, precio_ud, id) {
  const producto = {
    nombre: nombre,
    descripcion: descripcion,
    precio: precio_ud,
    id: id,
  };
  return producto;
};

const altaCliente = function () {
  let nombreCliente = document.getElementById("nombreCliente").value;
  let apellidoCliente = document.getElementById("apellidoCliente").value;
  let dniCliente = document.getElementById("dniCliente").value;
  let emailCliente = document.getElementById("emailCliente").value;
  let nuevoCliente = crearCliente(
    nombreCliente,
    apellidoCliente,
    dniCliente,
    emailCliente
  );
  listaClientes.push(nuevoCliente);
  console.log(nuevoCliente);
  console.log(listaClientes);
  return nuevoCliente;
};

const altaProducto = function () {
  let nombreProducto = document.getElementById("nombreProducto").value;
  let descripcionProducto = document.getElementById(
    "descripcionProducto"
  ).value;
  let precioProducto = document.getElementById("precioProducto").value;
  let idProducto = document.getElementById("idProducto").value;
  let nuevoProducto = crearProducto(
    nombreProducto,
    descripcionProducto,
    precioProducto,
    idProducto
  );
  listaProductos.push(nuevoProducto);
  console.log(nuevoProducto);
  console.log(listaProductos);
  return nuevoProducto;
};

const bajaCliente = function () {
  const nombresClientes = [];
  for (let i = 0; i < listaClientes.length; i++) {
    nombresClientes.push(listaClientes[i].nombre);
  }
  console.log(nombresClientes);
  let opcionesNombre = "";
  for (let x = 0; x < nombresClientes.length; x++) {
    opcionesNombre += `${x + 1} . ${nombresClientes[x]}  `;
  }

  const seleccion = prompt(
    `Elige el numero de cliente que quieres borrar : ${opcionesNombre}`
  );

  listaClientes.splice(seleccion - 1, 1);
  console.log(listaClientes);
};

const bajaProducto = function () {
  const nombresProductos = [];
  for (let i = 0; i < listaProductos.length; i++) {
    nombresProductos.push(listaProductos[i].nombre);
  }
  console.log(nombresProductos);
  let opcionesNombre = "";
  for (let x = 0; x < nombresProductos.length; x++) {
    opcionesNombre += `${x + 1} . ${nombresProductos[x]}  `;
  }

  const seleccion = prompt(
    `Elige el numero del producto que quieres borrar : ${opcionesNombre}`
  );

  listaProductos.splice(seleccion - 1, 1);
  console.log(listaProductos);
};
