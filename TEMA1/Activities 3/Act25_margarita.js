"use strict"
{
//Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.  

 function myFunction(num){
        let cad = num.toString();
        let cadInv = "";
        for(let i = cad.length; i >= 0; i--){
            cadInv += cad.charAt(i);
        }
        if (cad == cadInv){
            return true
        }else{
            return false
        }
    }

    console.log(myFunction(2002));
    console.log(myFunction(1234));





}