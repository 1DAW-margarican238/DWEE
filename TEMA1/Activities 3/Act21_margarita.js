"use strict"
{
//Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".   

function myFunction(cad){
    let cadF = "";
    for(let i = cad.length; i>=0;i--){
        cadF += cad.charAt(i);
    }
    return cadF;
};
console.log(myFunction("Hola mundo"));




}