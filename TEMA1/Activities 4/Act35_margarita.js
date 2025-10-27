"use strict"
{
//Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25]

function myFunction(num){
    return num.map ((elem)=> elem*elem);
}

let myArray = [1,4,5];
console.log(myFunction(myArray));

}