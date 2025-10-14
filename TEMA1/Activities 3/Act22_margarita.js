"use strict"
{
// Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2   


// !!NO ESTA TERMINADO

function myFunction(cad, pal){
cad = cad.toLowerCase();
pal = pal.toLowerCase();
let myArray = cad.split(" "); // separado
let cont = 0;
for(let i = 0; i>= myArray.length;i++){
    let myElement = myArray.shift();
    if(myElement == pal){
        cont++;
    }
    
}
return cont;
};

console.log(myFunction("Hola mundo adios mundo","mundo"))


}