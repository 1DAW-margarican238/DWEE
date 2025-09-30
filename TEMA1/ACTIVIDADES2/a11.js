"use strict"
{
     function miFuncion(n){
        if (n%2 !==0){
            return "es primo";
        }else{
            return "no es primo";
        }
     }

     console.log("5 " +  miFuncion(5));
     console.log("12 " +  miFuncion(12));

// recursiva
 function miFuncion2(n){
        if(n===0){
            return "no es primo";
        }else if (n === 1){
            return "es primo";
        }else{
            return miFuncion2(n-2);
        }
    }

console.log("");

    console.log("--- RECURSIVE FUNCTION ---")
   let x = miFuncion2(10);
   console.log("10 " + x); //even
   let y = miFuncion2(13); 
   console.log("13 " + y); //odd

}