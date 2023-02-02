function saludar() {
  alert("Hola!");
}

window.addEventListener("load", function () {
  var boton = document.getElementById("boton");
  boton.addEventListener("click", saludar);
});
