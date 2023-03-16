function enviarPrecio() {
  // Coje el precio del input
  let precio = document.getElementById("precio").value;

  // Guarda el precio en la cookie
  document.cookie = "precio=" + precio;

  // Incrementa las pulsaciones cada vez que es presionado, actualizando la cookie de pulsaciones.
  let pulsaciones = parseInt(getCookie("pulsaciones")) || 0;
  let precioGuardado = getCookie("precio");
  pulsaciones++;
  document.cookie = "pulsaciones=" + pulsaciones;
  document.getElementById("pulsaciones").value = pulsaciones;
  document.getElementById("precioGuardado").value = precioGuardado;
}

// Funcion para conseguir los valores de la cookie
function getCookie(cookieName) {
  let valor = "; " + document.cookie;
  let partes = valor.split("; " + cookieName + "=");
  if (partes.length == 2) return partes.pop().split(";").shift();
}

function showCookies() {
  let bloqueShow = document.getElementById("mCookies");
  bloqueShow.classList.toggle("hidden");
}
