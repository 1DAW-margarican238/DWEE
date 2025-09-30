"use strict"

{
let num = parseInt(prompt("Introduce un número positivo: "));

console.log("Los divisores de " + num + " son:");

for (let i = 1; i <= num; i++) {
  if (num % i === 0) {
    console.log(i);
  }
}
}