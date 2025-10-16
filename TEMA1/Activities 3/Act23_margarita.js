"use strict"
{
// Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.   

function myFunction(cad){
        cad = cad.toLowerCase();
        let cad2 = (cad.split('').reverse().join(''));
        return cad == cad2;
    };

    console.log(myFunction("salas"));
    console.log(myFunction("almas"));

}