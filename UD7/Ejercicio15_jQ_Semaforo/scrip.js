$(document).ready(function () {
  var estado = "verde";
  $("#cambiar").click(function () {
    if (estado == "verde") {
      $("#verde").toggleClass("encendido");
      $("#amarillo").toggleClass("encendido");
      estado = "amarillo";
    } else if (estado == "amarillo") {
      $("#amarillo").toggleClass("encendido");
      $("#rojo").toggleClass("encendido");
      estado = "rojo";
    } else if (estado == "rojo") {
      $("#rojo").toggleClass("encendido");
      $("#verde").toggleClass("encendido");
      estado = "verde";
    }
  });
});
