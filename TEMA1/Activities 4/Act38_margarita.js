"use strict"
{
// Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos,
// el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma
// descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }


function myFunction(array){
  let completo = {
    asc: [],
    desc: []
  };

completo.asc = [...myArray].sort((a,b)=> a-b);
completo.desc = [...myArray].sort((a,b)=> b-a);
return completo;
}

let myArray = [7,5,7,8,6];
console.log(myFunction(myArray));


}