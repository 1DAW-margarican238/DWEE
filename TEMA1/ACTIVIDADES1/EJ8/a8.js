"use strict"
{
let num = parseInt(prompt("Introduce un número positivo: "));

console.log("Tabla de multiplicar del " + num + " hasta el 10:");

for (let i = 0; i <= 10; i++) {
    console.log(num + ' x ' + i + ' = ' + num*i)

}
}