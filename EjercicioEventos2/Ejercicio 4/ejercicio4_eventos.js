// Carpeta en la que se encuentran las imagenes
const carpeta = "./imagenes/";
// Nombres de las imagenes
const imagenes = ["imagen1.png", "imagen2.png", "imagen3.png", "imagen4.png"];
// Posicion de la imagen actual
let pos = 0;

window.addEventListener("load", function () {
  // Añadimos la imagen inicial
  const contenedor = document.getElementById("contenedor");
  contenedor.style.backgroundImage = "url(" + carpeta + imagenes[pos] + ")";
  const flechaDerecha = document.getElementById("flecha-derecha");
  const flechaIzquierda = document.getElementById("flecha-izquierda");
  flechaDerecha.addEventListener("mouseenter", function () {
    flechaDerecha.style.backgroundColor = "green";
  });
  flechaDerecha.addEventListener("mouseleave", function () {
    flechaDerecha.style.backgroundColor = "white";
  });
  flechaDerecha.addEventListener("click", function () {
    if (pos < 3) {
      pos++;
    } else {
      pos = 0;
    }
    contenedor.style.backgroundImage = "url(" + carpeta + imagenes[pos] + ")";
  });
  flechaIzquierda.addEventListener("mouseenter", function () {
    flechaIzquierda.style.backgroundColor = "green";
  });
  flechaIzquierda.addEventListener("mouseleave", function () {
    flechaIzquierda.style.backgroundColor = "white";
  });
  flechaIzquierda.addEventListener("click", function () {
    if (pos > 0) {
      pos--;
    } else {
      pos = 3;
    }
    contenedor.style.backgroundImage = "url(" + carpeta + imagenes[pos] + ")";
  });
});
