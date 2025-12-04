"use strict"
{
//Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5

let regexp = /[aeiouáéíóú]/gi;

function myFunction(cad){
cad = cad.replace (" ", "");
console.log(cad);
let vocales = cad.match(regexp);
let str = ("Vocales: " + vocales.length + ", Consonantes: " + (cad.length - vocales.length));
return str;

};

console.log(myFunction("Hola Mundo"));
}