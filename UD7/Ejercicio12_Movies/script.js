function searchMovie() {
  // Obtén el valor del cuadro de texto
  var title = document.getElementById("movieTitle").value;

  // Crea una nueva etiqueta de script
  var script = document.createElement("script");
  // El parámetro de callback es lo que hace que se utilice JSONP
  // Aquí, el nombre de la función de callback es "displayMovie"
  script.src =
    "http://www.omdbapi.com/?apikey=811c5bc5&t=" +
    title +
    "&callback=displayMovie";

  // Inserta la nueva etiqueta de script en el documento para enviar la solicitud
  document.body.appendChild(script);
}

function displayMovie(response) {
  // Esta función se llamará cuando la API envíe la respuesta
  // Borrar el resultado anterior
  document.getElementById("results").innerHTML = "";

  if (response.Error) {
    // Mostrar el mensaje de error
    document.getElementById("results").innerText = response.Error;
  } else {
    // Mostrar el título, el año y el póster
    document.getElementById("results").innerHTML = `
            <h2>${response.Title} (${response.Year})</h2>
            <img src="${response.Poster}" alt="${response.Title}">
        `;
  }
}
