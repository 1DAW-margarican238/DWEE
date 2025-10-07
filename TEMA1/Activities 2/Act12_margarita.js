"use strict"
{
let n = parseFloat(prompt("Introduce a number:"));
let op = prompt("Introduce 'F' o 'C': ");
function miFuncion(n,op){
   if (op === 'F' || op === 'f'){
    return  ((n-32)*5 /9)+ 'C';
   }else if (op === 'C' || op === 'c'){
     return ((n*9/5)+32) + 'F';
   }else{
    return "Not valid"
   }

}

console.log(miFuncion(n, op));



}