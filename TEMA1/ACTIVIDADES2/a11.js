"use strict"
{
     let n = parseInt(prompt("Introduce un número:"))
     function miFuncion(n){
        if (n%2 !==0){
            return false;
        }else{
            return true;
        }
     }

     console.log("¿Es primo?")
     console.log(miFuncion(n));

}