"use strict"
{
let myVector = ["book", "short", "veryveryverylong", "manymany"];

console.log("a. La cadena mas corta");
let shortest = myVector[0];
for (let i = 1; i < myVector.length; i++) {
    if (myVector[i].length < shortest.length) {
        shortest = myVector[i];
    }
}
console.log(shortest);

console.log("b. La cadena más larga");
let longest = myVector[0];
for (let i = 1; i < myVector.length; i++) {
    if (myVector[i].length > longest.length) {
        longest = myVector[i];
    }
}
console.log(longest);





console.log("c. La cadena con más letras a");
let maxA = myVector[0];
let totalA = 0;
for (let i =0; i < myVector.length;i++){
     let contA = 0;
    for (let j = 0; j < myVector[i].length; j++) {
        if (myVector[i].charAt(j) === 'a' || myVector[i].charAt(j) === 'A') {
            contA++;
        }
    }
    if (contA > totalA) {
        totalA = contA;
        maxA = myVector[i];
    }
}
   
console.log(maxA);



console.log("d. Cuántas cadenas hay que tengan la b y cuáles son");
let wordsB = [];
let contB =0;
for (let i = 0; i < myVector.length; i++) {
    if (myVector[i].includes('b') || myVector[i].includes('B')) {
        contB++;
        wordsB.push(myVector[i]);
    }
};
console.log("Hay " + contB + " palabras con B y son " + wordsB);

}