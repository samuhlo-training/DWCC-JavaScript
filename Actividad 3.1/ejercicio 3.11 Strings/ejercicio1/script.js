"use stric";

const resultado = document.getElementById("resultado");

const limpiar = () => (resultado.innerHTML = " ");

const separar = function () {
  let datos = String(document.getElementById("nombre").value);
  const separar = datos.split(",");
  const sinEspacios = separar.map((nombre) => {
    return nombre.trim();
  });
  return sinEspacios;
};

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
  if (!comprobar) {
    const nombreApellidos = separar();
    const stringNombre = `${nombreApellidos[0]}, ${nombreApellidos[1]}`;
    resultado.innerHTML = stringNombre;
    return stringNombre;
  } else {
    resultado.innerHTML = "Datos erroneos";
  }
}

function opcion3() {
  limpiar();
  let comprobar = opcion1();

  if (!comprobar) {
    const nombreApellidos = separar();
    const nombre = nombreApellidos[1].split(" ");
    const primerNombre = nombre[0];
    const saludo = `Hola ${primerNombre}`;
    resultado.innerHTML = saludo;
  } else {
    resultado.innerHTML = "Datos erroneos";
  }
}

function opcion4() {
  limpiar();
  let comprobar = opcion1();

  if (!comprobar) {
    const nombreApellidos = separar();
    const longitud = nombreApellidos[0].length + nombreApellidos[1].length;
    resultado.innerHTML = longitud;
  } else {
    resultado.innerHTML = "Datos erroneos";
  }
}

function opcion5() {
  limpiar();
  let comprobar = opcion1();

  if (!comprobar) {
    const nombre = opcion2();
    const minusculas = nombre.toLowerCase();
    resultado.innerHTML = minusculas;
  } else {
    resultado.innerHTML = "Datos erroneos";
  }
}

function opcion6() {
  limpiar();
  let comprobar = opcion1();

  if (!comprobar) {
    const nombre = opcion2();
    const mayusculas = nombre.toUpperCase();
    resultado.innerHTML = mayusculas;
    return mayusculas;
  } else {
    resultado.innerHTML = "Datos erroneos";
  }
}

function opcion7() {
  limpiar();
  let comprobar = opcion1();

  if (!comprobar) {
    const nombreApellidos = separar();
    const totalNombre = nombreApellidos[1].length;
    resultado.innerHTML = totalNombre;
  } else {
    resultado.innerHTML = "Datos erroneos";
  }
}

function opcion8() {
  limpiar();
  let comprobar = opcion1();
  if (!comprobar) {
    const nombreApellidos = separar();
    const totalApellidos = nombreApellidos[0].length;
    console.log(totalApellidos);
    resultado.innerHTML = totalApellidos;
  } else {
    resultado.innerHTML = "Datos erroneos";
  }
}

function opcion9() {
  limpiar();
  let comprobar = opcion1();
  if (!comprobar) {
    const nombreApellidos = separar();
    const separadoNombre = nombreApellidos[1].split(" ");
    const separadoApellidos = nombreApellidos[0].split(" ");
    let separados = separadoApellidos.concat(separadoNombre);
    const iniciales = [];
    for (let i = 0; i <= separados.length - 1; i++) {
      iniciales.push(separados[i].charAt(0).toUpperCase());
    }
    resultado.innerHTML = `${iniciales.join(".")}`;
    return iniciales;
  } else {
    resultado.innerHTML = "Datos erroneos";
  }
}

function opcion10() {
  limpiar();
  let comprobar = opcion1();
  if (!comprobar) {
    const nombreApellidos = separar();
    const separadoNombre = nombreApellidos[1].split(" ");
    const separadoApellidos = nombreApellidos[0].split(" ");
    let separados = separadoApellidos.concat(separadoNombre);
    let encriptado = [];
    for (let i = 0; i <= separados.length - 1; i++) {
      for (let x = 1; x <= separados[i].length; x++) {
        encriptado.push("*");
      }
      encriptado.push(" ");
    }
    resultado.innerHTML = encriptado.join("");
  } else {
    resultado.innerHTML = "Datos erroneos";
  }
}

function opcion11() {
  limpiar();
  let comprobar = opcion1();
  if (!comprobar) {
    const ini = opcion9();
    const reverse = ini.slice().reverse();
    const iniciales = ini.join("");
    const inicialesReves = reverse.join("");
    if (iniciales != inicialesReves) {
      resultado.innerHTML = "No es palindromo";
    } else {
      resultado.innerHTML = "Es palindromo";
    }
  } else {
    resultado.innerHTML = "Datos erroneos";
  }
}
