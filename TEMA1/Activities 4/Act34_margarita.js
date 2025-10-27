"use strict"
{
//Programa una función que valide que un texto sea un email válido, p.e. miFuncion (“javier.ferrer@iesmartinezm.es”) devolverá verdadero. NOTA: caracteres, números, puntos guión alto y bajo+@+caracteres, números+.+al menos dos caracteres.

//not finished, test it more

// let regexp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
function myFunction(cad){
return (regexp.test(cad));
}

console.log(myFunction("javier.ferrer@iesmartinezm.es"));
console.log(myFunction("jv22@iesmartinezm.e"));
}