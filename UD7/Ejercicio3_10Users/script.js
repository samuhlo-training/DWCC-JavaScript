const usuariosDiv = document.getElementById("usuarios");
let usuarios = [];

function mostrarUsuarios() {
  usuariosDiv.innerHTML = "<p>Cargando...</p>";
  fetch("https://randomuser.me/api/?results=10")
    .then((response) => response.json())
    .then((data) => {
      usuarios = data.results;
      usuariosDiv.innerHTML = "";

      for (let i = 0; i < usuarios.length; i++) {
        const user = usuarios[i];

        const userDiv = document.createElement("div");
        userDiv.className = "user";
        userDiv.innerHTML = `
                    <img src="${user.picture.large}" alt="${user.name.first}">
                    <h2>${user.name.first} ${user.name.last}</h2>
                    <p>${user.email}</p>
                    <p>${user.location.street.number}, ${user.location.street.name}, ${user.location.state}</p>
                    <button>Cambiar</button>
                `;
        userDiv
          .querySelector("button")
          .addEventListener("click", () => cambiarUsuario(i));

        usuariosDiv.appendChild(userDiv);
      }
    });

  function cambiarUsuario(index) {
    const userDiv = document.querySelectorAll(".user")[index];
    userDiv.innerHTML = "<p>Esperando usuario nuevo...</p>";
    //set timeout para que se vea el cambio ( complementario )
    setTimeout(() => {
      fetch("https://randomuser.me/api/")
        .then((response) => response.json())
        .then((data) => {
          const user = data.results[0];
          usuarios[index] = user;

          userDiv.innerHTML = `
                    <img src="${user.picture.large}" alt="${user.name.first}">
                    <h2>${user.name.first} ${user.name.last}</h2>
                    <p>${user.email}</p>
                    <p>${user.location.street.number}, ${user.location.street.name}, ${user.location.state}</p>
                    <button>Cambiar</button>
                `;
          userDiv
            .querySelector("button")
            .addEventListener("click", () => cambiarUsuario(index));
        });
    }, 1000);
  }
}
mostrarUsuarios();
