const btnCargarMapa = document.getElementById("cargarMapa");
const inputApiKey = document.getElementById("apiKey");
const imgMapa = document.getElementById("mapa");

btnCargarMapa.addEventListener("click", function () {
  const apiKey = inputApiKey.value;
  fetch(
    `https://opendata.aemet.es/opendata/api/mapasygraficos/analisis?apikey=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => fetch(data.datos))
    .then((response) => response.blob())
    .then((blob) => {
      const url = URL.createObjectURL(blob);
      imgMapa.src = url;
      imgMapa.style.display = "block";
      btnCargarMapa.style.display = "none";
      inputApiKey.style.display = "none";
    })
    .catch((error) => console.error("Error:", error));
});
