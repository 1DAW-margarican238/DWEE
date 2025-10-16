"use strict"
{
// En un vector de números, indicar:
console.log("a. El número de elementos del vector.")
let myVector = [1,2,3,4,5, -1, -5 ];
console.log(myVector.length);





console.log("b. Cuántos son pares y cuántos impares y cuáles son.");
let pares = [];
let impares = [];
let contP = 0;
let contI = 0;
for (let i = 0; i < myVector.length; i++) {
  if (myVector[i] % 2 === 0) {
    pares.push(myVector[i]);
    contP++;
  } else {
    impares.push(myVector[i]);
    contI++;
  }
  
  
};
console.log("Hay " + contP + " numeros pares y son: "+pares + ". Y hay " +  contI + " numeros impares y son: " + impares + ".")





console.log("c. La suma de todos los números negativos.");
let imparesC = 0;
let paresD = 0;
for (let i = 0; i < myVector.length; i++) {
  if (myVector[i] <0) {
   imparesC += myVector[i];
  }else{
    paresD += myVector[i];
  }
};
console.log(imparesC);






console.log("d. El producto de todos los números positivos.");
console.log(paresD);





console.log("e. Cuántos son primos y cuáles son.");
let contPrimos = 0;
let numerosPrimos = [];
function esPrimo (n) {
    if (n == 2 || n == 3){
        return true;
    }else {
        if (n % 2 != 0 && n % 3 != 0){
            return true;
        }
    }
}

for (let i =0;i<myVector.length;i++){
    if(esPrimo(myVector[i])){
        contPrimos++;
        numerosPrimos.push(myVector[i]);

    }
}
console.log("Hay " + contPrimos + " números primos y son: " + numerosPrimos);






console.log("f. Los números que ocupan las posiciones pares del vector.");
let elementosPares = [];

for (let i = 0;i<myVector.length;i++){
    if (i % 2 === 0) {
    elementosPares.push(myVector[i]);
  }
}

console.log(elementosPares);





console.log("g. El número mayor.");
let myVectorGyH = new Array();
myVectorGyH = [...myVector]; 
myVectorGyH.sort((a,b)=>a-b);
console.log(myVectorGyH.pop());





console.log("h. El número menor.");
console.log(myVectorGyH.shift());





console.log("i. La media de todos los números, los números que están por encima y los que están por debajo.");
let myVectorI = new Array();
myVectorI = [...myVector]; 
let suma = 0;

for (let i = 0; i < myVectorI.length; i++) {
    suma += myVectorI[i];
}

console.log("La media es: " +  suma /myVectorI.length);

let numDebajo = [];
let numEncima = [];

for (let i = 0; i < myVectorI.length; i++) {
    if(myVectorI[i] > suma /myVectorI.length){
        numEncima.push(myVectorI[i]);
    }else{
        numDebajo.push(myVectorI[i]);
    }
}

console.log("Los numeros por encima de la media son: " + numEncima + " . Los numeros por debajo de la media son: "+numDebajo);




console.log("j. El vector ordenado de mayor a menos y viceversa.");
console.log(myVector.sort((a,b)=>a-b));
console.log(myVector.sort((a,b)=>b-a));





console.log("k. Buscar un valor introducido por el usuario e indicar si existe o no.");
function myFunctionK(valor) {
    for (let i = 0; i < myVectorI.length; i++) {
        if (myVectorI[i] === valor) {
            return true; 
        }
    }
    return false;
}
console.log(myFunctionK(2));
console.log(myFunctionK(8));





}