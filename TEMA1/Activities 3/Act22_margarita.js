"use strict"
{
// Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2   

 function myFunction(cad, pal){
        cad = cad.toLowerCase();
        pal = pal.toLowerCase();
        let myArray = cad.split(" ");   // separado aqui
        let cont = 0;
        for(let i = 0; i < myArray.length; i++){
            if(myArray[i] == pal){
                cont++;
            }
        }
        return cont;
    };

    console.log(myFunction("Hola mundo adios mundo", "mundo"));

}