//Solicitar 1000 usuarios aleatorios y almacenar las URL de sus fotos
async function fetchUsers() {
  let response = await fetch("https://randomuser.me/api/?results=1000");
  let data = await response.json();

  let imageUrlArray = data.results.map((user) => user.picture.large);

  // Crear 50 elementos de imagen en el DOM
  let imageElements = [];
  for (let i = 0; i < 50; i++) {
    let img = document.createElement("img");
    document.body.appendChild(img);
    imageElements.push(img);
  }

  //ORIGINAL
  //   // Crear una función para actualizar las imágenes
  //   function updateImages() {
  //     for (let img of imageElements) {
  //       let randomIndex = Math.floor(Math.random() * imageUrlArray.length);
  //       //Meter un delay de unos milisegundos para que se vea el cambio

  //       img.src = imageUrlArray[randomIndex];
  //     }
  //   }

  //   // Actualizar las imágenes cada dos décimas de segundo
  //   setInterval(updateImages, 200);

  //MODIFICADO
  function updateImage(img) {
    let randomIndex = Math.floor(Math.random() * imageUrlArray.length);
    img.src = imageUrlArray[randomIndex];
  }

  // Aplicar un retraso de refresco aleatorio para cada imagen
  for (let img of imageElements) {
    let delay = Math.random() * 1000; // retraso aleatorio entre 0 y 1000 ms
    setInterval(() => updateImage(img), delay);
  }
}

fetchUsers();
