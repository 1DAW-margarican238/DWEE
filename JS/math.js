"use strict"
{
    console.log("\n\tMATH");

//constantes    
console.log(Math.PI);
console.log(Math.E);
console.log(Math.LN2);
console.log(Math.LN10);

console.log("\n\tFloor");
let f = 37.6;
console.log(Math.floor(f)); //número entero por Abajo
let f2 = -37.6;
console.log(Math.floor(f2)); //número entero por Abajo

console.log("\n\tCeil");
let c = 37.6;
console.log(Math.ceil(c)); //número entero por Arriba
let c2 = -37.6;
console.log(Math.ceil(c2)); //número entero por Arriba

console.log("\n\tRound");
let r = 37.6;
console.log(Math.round(r)); //redondeo
let r2 = 37.4;
console.log(Math.round(r2)); //redondeo


console.log("\n\tOperaciones Matemáticas");
let num = -37.8
console.log(Math.abs(num)); //valor absoluto //???
console.log(Math.min(10,20,4)); //numero minimo
console.log(Math.max(10,20,4)); //numero máximo
console.log(Math.pow(2,4)); // potencia (2 elevado a 4);
console.log(Math.sqrt(121)); // la raiz cuadrada
console.log(Math.random()); //numero random entre 0 y <1 (puede ser 0 pero nunca 1)
console.log(Math.random().toFixed(2)); //numero random con 2 decimales
console.log(Math.random()*10); // valor entre 0 y <10
console.log(Math.random()*100); // valor entre 0 y <100

// valor entre 0 y 10 (ambos inclusive)
console.log(Math.round(Math.random()*10)); //0<= x <=10 //redondeado

//numero sin decimales: 
console.log(Math.floor(Math.random()*10)); //0<= x <=9
console.log(Math.ceil(Math.random()*10)); //1<= x <=10

//num aleatorio entre 10 y 100 // 10<= x <100
console.log(Math.random()*(100-10)+10); // si random es 0 le suma 10
console.log(Math.round(Math.random()*(100-10)+10)); 

console.log(Math.round(Math.random()*(60-20)+20)); //num aleatorio entre 20 y 60 // 20<= x <60


console.log("\n\tEj 41");
//ej41
console.log(Math.round(Math.random()*(600-501)+501));




}