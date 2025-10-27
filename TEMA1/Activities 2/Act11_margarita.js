"use strict"
{
     function miFuncion(n){
        if (n%2 !==0){
            return "es par";
        }else{
            return "no es par";
        }
     }

     console.log("5 " +  miFuncion(5));
     console.log("12 " +  miFuncion(12));

// recursiva
 function miFuncion2(n){
        if(n===0){
            return "es par";
        }else if (n === 1){
            return "no es par";
        }else{
            return miFuncion2(n-2);
        }
    }

console.log("");

    console.log("--- RECURSIVE FUNCTION ---")
   let x = miFuncion2(10);
   console.log("10 " + x); //par
   let y = miFuncion2(13); 
   console.log("13 " + y); //impar

}