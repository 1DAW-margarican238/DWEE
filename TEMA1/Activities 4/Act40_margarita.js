"use strict"
{
// Programa una función para devolver la edad de una persona dada su fecha de nacimiento en
// este formato dd/mm/aaa.


function myFunction(fechaNac){

    let partesF = fechaNac.split("/");
    let dia = partesF[0];
    let mes = partesF[1];
    let anyo = partesF[2];

    let fechaNac2 = new Date(anyo, mes, dia);

    let hoy = new Date();
    let edad = hoy.getFullYear() - fechaNac2.getFullYear();
    return edad;

};

console.log(myFunction("25/10/2006"))

//error

}