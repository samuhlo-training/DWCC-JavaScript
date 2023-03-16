window.addEventListener("load", function () {
  const boton = document.getElementById("btnExamen");
  const parrafo = this.document.getElementById("parrafoExamen");
  boton.addEventListener("mouseenter", function () {
    boton.style.backgroundColor = "red";
  });
  boton.addEventListener("mouseleave", function () {
    boton.style.backgroundColor = "green";
  });
  parrafo.addEventListener("mouseover", function () {
    parrafo.innerHTML = "Bravo,bien hecho";
  });
  parrafo.addEventListener("mouseout", function () {
    parrafo.innerHTML = "Hasta luego";
  });

  boton.addEventListener("click", function () {
    document.addEventListener("keyup", function (e) {
      console.log(e.key);
      boton.style.backgroundColor = "yellow";
      boton.innerHTML = `<strong>Teclado</strong>`;
    });
  });
});
