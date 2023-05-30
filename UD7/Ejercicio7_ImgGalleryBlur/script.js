// Accedemos al div contenedor.
const container = document.getElementById("container");

// Creamos 200 imágenes y las añadimos al div.
for (let i = 1; i <= 200; i++) {
  const img = document.createElement("img");
  img.src = `https://picsum.photos/300/300?image=${i}`;
  img.id = `img-${i}`;

  // Comprobamos si la imagen debe estar desenfocada.
  if (localStorage.getItem(img.id) === "true") {
    img.src = `https://picsum.photos/300/300?blur&image=${i}`;
  }

  // Añadimos un event listener a la imagen.
  img.addEventListener("click", () => {
    if (localStorage.getItem(img.id) === "true") {
      // Si la imagen ya está desenfocada, la enfocamos.
      img.src = `https://picsum.photos/300/300?image=${i}`;
      localStorage.setItem(img.id, "false");
    } else {
      // Si la imagen está enfocada, la desenfocamos.
      img.src = `https://picsum.photos/300/300?blur&image=${i}`;
      localStorage.setItem(img.id, "true");
    }
  });

  // Añadimos la imagen al contenedor.
  container.appendChild(img);
}
