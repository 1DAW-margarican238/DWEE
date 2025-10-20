"use strict"
{
//Programa una función que valide que un texto sea un nombre válido, p.e. miFuncion (“Javier Ferrer”) devolverá verdadero. NOTA: No puede haber números ni caracteres especiales como ¡ o ¿


let regexp = /[^a-z|^" "]/gi;

function myFunction(cad){
let valide = cad.match(regexp);
if(valide){
    return false;
}else{
    return true;
}

};

console.log(myFunction("Javier Ferrer")); //true, because it only has letters
console.log(myFunction("Javier 23")) // false, because it has numbers and special characters




}