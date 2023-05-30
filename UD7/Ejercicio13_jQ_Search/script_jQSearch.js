//Ejercicio 7.6 Búsqueda de elementos
// Cargamos jQuery usando un script de forma dinámica
var script = document.createElement("script");
script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js";
document.getElementsByTagName("head")[0].appendChild(script);

// Esperamos un poco hasta que jQuery se cargue completamente
setTimeout(() => {
  let links = [];
  // Utilizamos jQuery para encontrar todos los elementos de enlace en la página
  $("a[href]").each(function () {
    let link = $(this);
    let item = {
      nombre: link.text(),
      url: link.attr("href"),
    };
    links.push(item);
  });
  // Imprimimos el array de enlaces en formato JSON en la consola
  console.log(JSON.stringify(links, null, 2));
}, 1000);
