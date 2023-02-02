"use strict";

const newDiv = document.createElement("div");
newDiv.setAttribute("id", "mydiv");
newDiv.innerHTML = "Este div es creado por js";
const prueba = document.getElementById("prueba");
const prueba2 = document.getElementById("prueba2");
document.body.insertBefore(newDiv, prueba2);
const nDiv = document.getElementById("mydiv");
nDiv.style.color = "red";
document.body.style.textAlign = "center";
