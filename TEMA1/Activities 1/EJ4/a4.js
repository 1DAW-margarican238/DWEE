"use strict"
{

let num1;
let suma =0;
let producto =1;
let contador = 0;


do {
  num1 = parseInt(prompt("Introduce el número:"));
  if(num1>=0){
    suma += num1;
    producto *= num1;
    contador ++;
  }
} while (num1 >= 0);



console.log("La suma de todos los numeros es: " + suma);
console.log("La multiplicacion de los numeros es: "+ producto);
console.log("La media de los nuemros es: " + suma/contador );





}