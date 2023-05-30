const datos = [
  {
    nombre: "Mediavida",
    url: "/",
  },
  {
    nombre: "Foros ",
    url: "/foro/",
  },
  {
    nombre: "Cargando...",
    url: "/foro/",
  },
  {
    nombre: "Spy",
    url: "/foro/spy",
  },
  {
    nombre: "Top",
    url: "/foro/top",
  },
  {
    nombre: "Grupos",
    url: "/grupos/",
  },
  {
    nombre: "emerik",
    url: "/id/emerik",
  },
  {
    nombre:
      "\n                            \n                            Notificaciones\n                            0\n                        ",
    url: "/notificaciones",
  },
  {
    nombre:
      "\n                            \n                            Favoritos\n                            4\n                        ",
    url: "/foro/favoritos",
  },
  {
    nombre:
      "\n                            \n                            Mensajes\n                            0\n                        ",
    url: "/mensajes",
  },
  {
    nombre:
      "\n                        \n                        Marcadores\n                        ",
    url: "/id/emerik/marcadores",
  },
  {
    nombre:
      "\n                        \n                        Menciones\n                        ",
    url: "/id/emerik/menciones",
  },
  {
    nombre:
      "\n                        \n                        Configuración\n                        ",
    url: "/configuracion",
  },
  {
    nombre:
      "\n                        \n                        Salir\n                        ",
    url: "/logout?token=1685462593238db4438f3ac50e855a6e5bae2c3a40741aaf6d",
  },
  {
    nombre: "",
    url: "#",
  },
  {
    nombre: " Marcadores",
    url: "/id/emerik/marcadores",
  },
  {
    nombre: " Menciones",
    url: "/id/emerik/menciones",
  },
  {
    nombre: " Configuración",
    url: "/configuracion",
  },
  {
    nombre: "Salir",
    url: "/logout?token=1685462593238db4438f3ac50e855a6e5bae2c3a40741aaf6d",
  },
  {
    nombre:
      "\n                        \n            4\n                        \n        ",
    url: "#usermenu",
  },
  {
    nombre: "",
    url: "#sections",
  },
  {
    nombre: "",
    url: "/buscar",
  },
  {
    nombre:
      "\n                      \n                                            En directo: PlayStation Showcase 2023 (22:00)\n                                            \n                    ",
    url: "/foro/juegos/playstation-showcase-2023-miercoles-24-mayo-2200-699307/live",
  },
  {
    nombre:
      "\n                      \n                                            Lanzamientos de videojuegos de mayo\n                                            \n                    ",
    url: "/foro/7/lanzamientos-videojuegos-mayo-698882",
  },
  {
    nombre:
      "\n                      \n                                            ASUS presenta ROG Ally, su primera portátil con Windows 11 para hacer la competencia a Steam Deck\n                                            \n                    ",
    url: "/foro/3/asus-presenta-rog-ally-primera-portatil-windows-11-para-hac-698705",
  },
  {
    nombre: "\n            \n      \n        8\n    ",
    url: "/foro/juegos/square-enix-anuncia-nuevo-dragon-quest-monsters-para-ninten-699638",
  },
  {
    nombre:
      "Square Enix anuncia un nuevo Dragon Quest Monsters para Nintendo Switch",
    url: "/foro/juegos/square-enix-anuncia-nuevo-dragon-quest-monsters-para-ninten-699638",
  },
  {
    nombre: "\n            \n      \n        30\n    ",
    url: "/foro/juegos/resumen-warhammer-skulls-showcase-2023-699585",
  },
  {
    nombre: "Resumen del Warhammer Skulls Showcase 2023",
    url: "/foro/juegos/resumen-warhammer-skulls-showcase-2023-699585",
  },
  {
    nombre: "\n            \n      \n        109\n    ",
    url: "/foro/juegos/playstation-showcase-2023-sony-anuncia-oficialmente-project-699555",
  },
  {
    nombre: "Playstation Showcase 2023: Sony anuncia oficialmente Project Q",
    url: "/foro/juegos/playstation-showcase-2023-sony-anuncia-oficialmente-project-699555",
  },
  {
    nombre: "\n            \n      \n        10\n    ",
    url: "/foro/juegos/playstation-showcase-2023-anunciado-neva-creadores-gris-699561",
  },
  {
    nombre:
      "PlayStation Showcase 2023: anunciado Neva, de los creadores de Gris",
    url: "/foro/juegos/playstation-showcase-2023-anunciado-neva-creadores-gris-699561",
  },
  {
    nombre: "\n            \n      \n        56\n    ",
    url: "/foro/juegos/playstation-showcase-2023-gameplay-assassins-creed-mirage-699553",
  },
  {
    nombre: "PlayStation Showcase 2023: Gameplay de Assassin's Creed Mirage",
    url: "/foro/juegos/playstation-showcase-2023-gameplay-assassins-creed-mirage-699553",
  },
  {
    nombre: "\n            \n      \n        26\n    ",
    url: "/foro/juegos/playstation-showcase-trailer-nuevo-bungie-marathon-699554",
  },
];
function generarLista(datos) {
  // Crear un elemento de lista no ordenada
  let ul = document.createElement("ul");

  // Recorrer cada elemento en los datos
  datos.forEach(function (item) {
    // Comprobar que el nombre y la URL son válidos
    if (item.nombre.trim() !== "" && item.url.trim() !== "#") {
      // Crear un nuevo elemento de lista y añadirlo a la lista no ordenada
      const a = document.createElement("a");
      a.setAttribute("href", item.url);
      a.innerHTML = item.nombre;
      const li = document.createElement("li");
      li.appendChild(a);
      ul.appendChild(li);
    }
  });

  // Añadir la lista no ordenada al cuerpo del documento
  document.body.appendChild(ul);
}

// Llamar a la función con nuestros datos
generarLista(datos);
