"use strict"
{
//Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".   


function myFunction(cad){
      return cad.split('').reverse().join('');
}

let a = (myFunction("Hola mundo"));
console.log(a);





}