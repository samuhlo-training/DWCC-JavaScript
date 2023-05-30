// Crea una peticion asincrona usando el objeto XMLHttpRequest teniendo en cuenta lo siguiente:
// a) Enviar parametros usando el metodo POST
// b) Enviaremos el objeto "datos" como de tipo JSON
// var datos = {
//  nombre : 'María' ,
//  apellido : 'Pérez Rojo'
//  }
// c) Manejar la respuesta con una funcion anonima que gestione la respuesta correcta y el error
// d) manejar el progreso de la peticion explicitamente con la funcion "enProgreso( )"

var datos = {
  nombre: "María",
  apellido: "Pérez Rojo",
};

// Crear un objeto XMLHttpRequest
var xhr = new XMLHttpRequest();

// Inicializar la petición
xhr.open("POST", "https://ejemplo.com/api", true);

// Establecer el tipo de contenido de la petición a JSON
xhr.setRequestHeader("Content-Type", "application/json");

// Función para manejar el progreso de la petición
xhr.onprogress = function () {
  console.log("Carga en progreso...");
};

// Función para manejar la respuesta
xhr.onload = function () {
  if (xhr.status === 200) {
    // Si la petición fue exitosa
    console.log("Respuesta recibida: ", xhr.responseText);
  } else {
    // Si hubo un error con la petición
    console.error("Error en la petición: ", xhr.status, xhr.statusText);
  }
};

// Enviar la petición
xhr.send(JSON.stringify(datos));
