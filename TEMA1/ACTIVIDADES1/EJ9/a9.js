"use strict"

{
let num1, num2, op;

do {
    num1 = parseInt(prompt("Introduce el primer número:"));
    num2 = parseInt(prompt("Introduce el segundo número:"));
} while (isNaN(num1) || isNaN(num2));

do{
    op =prompt("Introduce una operacion aritmética (+,-,*,/):");
} while (op !== '+' && op !== '-' && op !== '*' && op !== '/');

if(op === '+'){
    console.log("El resultado de la operacion es: " + (num1+num2));
} else if (op === '-'){
    console.log("El resultado de la operacion es: " + (num1-num2));
}else if(op === '*'){
    console.log("El resultado de la operacion es: " + (num1*num2));
}else{
    console.log("El resultado de la operacion es: " + (num1/num2));
}

}