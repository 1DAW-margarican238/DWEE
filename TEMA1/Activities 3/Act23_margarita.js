"use strict"
{
// Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.   

function myFunction(cad){
    cad = cad.toLowerCase();
    let cad2 = "";
    for(let i = cad.length; i>=0;i--){
        cad2 += cad.charAt(i);
    }
    if (cad == cad2){
        return true;
    }else{
        return false;
    }
}


console.log(myFunction("salas"));
console.log(myFunction("almas"));


}