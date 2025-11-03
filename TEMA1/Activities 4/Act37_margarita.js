"use strict"
{
// Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}


let myArray = [1,2,3,4,5, -1, -5 ];

function myFunction(array){
let completo = {
    pares: [],
    impares: []
}


for (let i = 0; i < myArray.length; i++) {
  if (myArray[i] % 2 === 0) {
    completo.pares.push(myArray[i]);
  } else {
    completo.impares.push(myArray[i]);
  }
};
return completo;
}


console.log(myFunction(myArray));



}