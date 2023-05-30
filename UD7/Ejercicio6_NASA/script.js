//Account Email: basuradelsuelo@gmail.com
//Account ID: 55c60e91-54e5-47cd-8877-9bfa17b95ef1
//Api-KEY: bu1tHvrHOTfvdlfevaktgSqp8lXQfbRaYB67IdSd

const apodImage = document.getElementById("apodImage");
const dateInput = document.getElementById("dateInput");

// Función que se encarga de obtener y actualizar la imagen
function updateImage(date) {
  const apiKey = "bu1tHvrHOTfvdlfevaktgSqp8lXQfbRaYB67IdSd";
  const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      apodImage.src = data.url;
    })
    .catch((error) => console.error(error));
}

// Mostrar la imagen del día actual inicialmente
const today = new Date();
const dateString = today.toISOString().split("T")[0]; // Convertir a formato 'YYYY-MM-DD'
updateImage(dateString);
dateInput.value = dateString;

// Actualizar la imagen cuando se cambia la fecha
dateInput.addEventListener("change", (event) => {
  updateImage(event.target.value);
});
