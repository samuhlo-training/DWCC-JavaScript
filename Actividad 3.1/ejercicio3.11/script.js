"use stric";

const boton1 = document.getElementById("I");
const boton2 = document.getElementById("II");
const boton3 = document.getElementById("III");
const boton4 = document.getElementById("IV");
const boton5 = document.getElementById("V");
const boton6 = document.getElementById("VI");
const boton7 = document.getElementById("VII");
const boton8 = document.getElementById("VIII");
const boton9 = document.getElementById("IX");
const boton10 = document.getElementById("X");
const boton11 = document.getElementById("XI");

const resultado = document.getElementById("resultado");

const limpiar = () => (resultado.innerHTML = " ");

function opcion1() {
  limpiar();
  let datos = String(document.getElementById("nombre").value);
  let coma = datos.includes(",");
  if (datos.length === 0) {
    resultado.innerHTML = "No ha escrito un nombre";
    return true;
  } else {
    if (!coma) {
      resultado.innerHTML = "No ha puesto coma";
      return true;
    } else {
      resultado.innerHTML = "Esta correcto";
      return false;
    }
  }
}

function opcion2() {
  limpiar();
  let comprobar = opcion1();
  console.log(comprobar);
  if (!comprobar) {
    let datos = String(document.getElementById("nombre").value);
    const sinEspacios = datos.trim().replace(" ,", ",").replace(",", ", ");
    resultado.innerHTML = sinEspacios;
    return sinEspacios;
  } else {
    resultado.innerHTML = "Datos erroneos";
  }
}

function opcion3() {
  limpiar();
  let comprobar = opcion1();
  const nombre = opcion2();
  console.log(nombre);
  const partes = nombre.split(" ");
  console.log(partes);
  const saludo = `Hola ${partes[partes.length - 2]}`;
  if (!comprobar) {
    resultado.innerHTML = saludo;
  } else {
    resultado.innerHTML = "Datos erroneos";
  }
}

function opcion4() {
  limpiar();
  let comprobar = opcion1();
  const nombre = opcion2();
  const longitud = nombre.length - 2;
  if (!comprobar) {
    resultado.innerHTML = longitud;
  } else {
    resultado.innerHTML = "Datos erroneos";
  }
}

function opcion5() {
  limpiar();
  let comprobar = opcion1();
  const nombre = opcion2();
  const minusculas = nombre.toLowerCase();
  if (!comprobar) {
    resultado.innerHTML = minusculas;
  } else {
    resultado.innerHTML = "Datos erroneos";
  }
}

function opcion6() {
  limpiar();
  let comprobar = opcion1();
  const nombre = opcion2();
  const mayusculas = nombre.toUpperCase();
  if (!comprobar) {
    resultado.innerHTML = mayusculas;
  } else {
    resultado.innerHTML = "Datos erroneos";
  }
}

function opcion7() {
  limpiar();
  let comprobar = opcion1();
  const nombre = opcion2();
  console.log(nombre);
  const partes = nombre.split(" ");
  console.log(partes);
  const totalNombre =
    partes[partes.length - 1].length + partes[partes.length - 2].length;
  console.log(totalNombre);
  if (!comprobar) {
    resultado.innerHTML = totalNombre;
  } else {
    resultado.innerHTML = "Datos erroneos";
  }
}

function opcion8() {
  limpiar();
  let comprobar = opcion1();
  const nombre = opcion2();
  console.log(nombre);
  const partes = nombre.split(" ");
  console.log(partes);
  const totalApellidos = partes[0].length + partes[1].length;
  console.log(totalApellidos);
  if (!comprobar) {
    resultado.innerHTML = totalApellidos;
  } else {
    resultado.innerHTML = "Datos erroneos";
  }
}
