"use strict"
{
// Programa una función que dado un array de elementos, elimine los duplicados, pe.e mi
// Funcion (“x”,10,”x”,2,”10,10, true,true) devolverá [“x”,10,2,”10”,true]

function myFunction(array){

let mySet = new Set(array);
let myArray2 = Array.from(mySet);
return myArray2;

}

let myArray = ["x",10,"x",2,"10",10, true,true];
console.log(myFunction(myArray));



}