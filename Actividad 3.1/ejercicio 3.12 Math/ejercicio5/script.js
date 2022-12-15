"use strict";
const resultado = document.getElementById("resultado");

const limpiar = () => (resultado.innerHTML = " ");

function calcular() {
  limpiar();
  let radio = document.getElementById("radio").value;
  const longitudCirculo = 2 * Math.PI * radio;
  const diametroCirculo = radio * 2;
  const perimetroCirculo = Math.PI * diametroCirculo;
  const areaCirculo = Math.PI * (radio * radio);
  const areaEsfera = 4 * Math.PI * (radio * radio);
  const volumenEsfera = (4 / 3) * Math.PI * (radio * radio * radio);
  resultado.innerHTML = `La longituda del circlo es ${longitudCirculo} <br> El diametro del circulo es ${diametroCirculo} <br> El perimetro del circulo es ${perimetroCirculo}<br> El area del circulo es ${areaCirculo} <br> El area de la esfera es ${areaEsfera} <br> El volumen de la esfera es ${volumenEsfera}`;
}
