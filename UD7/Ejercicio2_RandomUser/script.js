async function getUser() {
  fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((data) => {
      let user = data.results[0];
      //Create DOM elements
      let div = document.createElement("div");
      let img = document.createElement("img");
      let h1 = document.createElement("h1");
      let h3 = document.createElement("h3");
      let h5 = document.createElement("h5");
      // Colocar los elementos en el DOM
      document.body.appendChild(div);
      div.appendChild(img);
      div.appendChild(h1);
      div.appendChild(h3);
      div.appendChild(h5);
      // Añadir los atributos
      img.setAttribute("src", user.picture.large);
      h1.innerHTML = `${user.name.first} ${user.name.last}`;
      h3.innerHTML = user.email;
      h5.innerHTML = `${user.location.street.name}, ${user.location.street.number}, ${user.location.state}`;
      // Mostrar por consola
      console.log("Foto:", user.picture.large);
      console.log("Nombre:", user.name.first);
      console.log("Apellido:", user.name.last);
      console.log("Email:", user.email);
      console.log(
        "Dirección:",
        `${user.location.street.name}, ${user.location.street.number}`
      );
      console.log("Estado:", user.location.state);
    })
    .catch((error) => console.error("Error:", error));
}

getUser();
