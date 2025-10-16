"use strict"
{
let vector = ["hola", "casualidad", "lucia"];

console.log("a. La cadena mas corta");
let cadenaMasCorta = vector[0];
for (let i = 1; i < vector.length; i++) {
    if (vector[i].length < cadenaMasCorta.length) {
        cadenaMasCorta = vector[i];
    }
}
console.log(cadenaMasCorta);


console.log("b. La cadena más larga");
let masLarga = vector[0]; 

for (let i = 1; i < vector.length; i++) {
    if (vector[i].length > masLarga.length) {
        masLarga = vector[i];
    }
}

console.log(masLarga);

console.log("c. La cadena con más letras a");


console.log("d. Cuántas cadenas hay que tengan la b y cuáles son");


}