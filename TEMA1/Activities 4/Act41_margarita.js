"use strict"
{
// Programa una función que obtenga un numero aleatorio entre 501 y 600


    function generarNumeroAleatorio (min, max){
        return (Math.round(Math.random()*(max-min)+min));
    }

    console.log(generarNumeroAleatorio(501, 600));

}