const arr1 = [
  "España",
  "Francia",
  "Suecia",
  "Italia",
  "Noruega",
  "Portugal",
  "Holanda",
];
const arr2 = ["Alemania", "Dinamarca", "Grecia", "Suiza"];

//const arrResultante = arr1
// .concat(arr2)
//  .splice(1)
// .sort();
const arrResultante = arr1.concat(arr2).splice(1).sort();
arrResultante.unshift("Belgica");
//arrResultante.shift();
//arrResultante.sort().unshift("Belgica");
console.log(arrResultante);

//Bélgica, Alemania,Dinamarca, Francia, Grecia, Holanda, Italia, Noruega, Portugal, Suecia,Suiza.
