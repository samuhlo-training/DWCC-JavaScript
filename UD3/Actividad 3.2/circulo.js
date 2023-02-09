//EJERCICIO: u3e6_circulo
//Crea un programa que pida al usuario el valor del radio y muestre por pantalla:
//El valor del radio.
//El valor del diámetro.
//El valor del perímetro de la circunferencia.
//El valor del área del círculo.
//El valor del área de la esfera.
//El valor del volumen de la esfera.
//El valor de Pi debes obtenerlo del objeto Math, no introducirlo manualmente.
//Debes escribir al lado si son cm, o cm2, o cm3.

const pi = Math.PI;

const getRadius = () => {
  return parseFloat(prompt("Enter the value of the radius: "));
};

const getDiameter = (radius) => {
  return 2 * radius;
};

const getCircumference = (radius) => {
  return 2 * pi * radius;
};

const getArea = (radius) => {
  return pi * radius ** 2;
};

const getSphereArea = (radius) => {
  return 4 * pi * radius ** 2;
};

const getSphereVolume = (radius) => {
  return (4 / 3) * pi * radius ** 3;
};

const main = () => {
  const radius = getRadius();
  const diameter = getDiameter(radius);
  const circumference = getCircumference(radius);
  const area = getArea(radius);
  const sphereArea = getSphereArea(radius);
  const sphereVolume = getSphereVolume(radius);

  console.log(`The value of the radius is: ${radius} cm`);
  console.log(`The value of the diameter is: ${diameter} cm`);
  console.log(`The value of the circumference is: ${circumference} cm`);
  console.log(`The value of the area is: ${area} cm2`);
  console.log(`The value of the sphere area is: ${sphereArea} cm2`);
  console.log(`The value of the sphere volume is: ${sphereVolume} cm3`);
};

main();
