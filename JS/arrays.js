"use strict"
{
//FORMAS DE DECLARAR UN ARRAY
//ARRAY UNIDIMENSIONALES

let myArray = []; //array sin elementos base
//para meter elementos al array, posicion + valor
myArray[0]=10;
myArray[1] =20;
myArray[2] = "Martínez";
console.log(myArray);

//declaro un objeto de la clase array
let myArray2 = new Array ();
//añadir los datos, posicion +valor
myArray2[0] =30;
myArray2[1]= "30";
console.log(myArray2);

//declarar un array con elementos ya añadidos
let myArray3 = ("gamusino","up","globo");
console.log(`El array tiene ${myArray.length} elementos`);


//clonar arrays
let myArray4 = new Array();
myArray4 = [...myArray]; 
console.log(myArray4);
//clonar varios arrays en uno
myArray4 = [...myArray,...myArray2,...myArray3]; 
console.log(myArray4);


console.log("-----------Bidimensionales-------------")
//ARRAY BIDIMENSIONAL
console.log("---FORMA 1---");//Forma 1:
let myArrayBi1 = new Array();
// let myArrayBi1 = [[]]; //es lo mismo
myArrayBi1[0] = [1,2,3]; //el arrray en la posicion 1 tiene 3 elementos;
myArrayBi1[1] = [2,3,4,5,6]; //el arrray en la posicion 2 tiene 5 elementos;
myArrayBi1[2] = [3,4,5,6,7];
//cambiamos un valor por otro
myArrayBi1[2][4] = "A"; // posicion 2 columna 4 (0,1,2,3,4)
console.log(myArrayBi1);

console.log("---FORMA 2---");//Forma 2: recorriendolo con un bucle for
let numFilas=2;
let numColumnas =3;
let myArrayBi2 = new Array(numFilas);
for (let i=0;i<numFilas;i++){
    myArrayBi2[i] = new Array (numColumnas);
}; // hemos creado un array bidimensional de 2 filas cada una con 3 columnas
console.log(myArrayBi2);
//añadir datos al array bidimensional
for(let i =0;i<numFilas;i++){
    for(let j=0;j<numColumnas;j++){
        myArrayBi2[i][j]=0;
    }
}; // esta forma no se suele usar
console.log(myArrayBi2);

console.log("---FORMA 3---");//Forma 3:
let myArrayBi3 = Array.from(Array(2), ()=> new Array(3));
console.log(myArrayBi3); // un array de 2 filas y 3 columnas
for(let i =0;i<numFilas;i++){
    for(let j=0;j<numColumnas;j++){
        myArrayBi3[i][j]=0;
    }
}; // para añadir datos
console.log(myArrayBi3);

console.log("---FORMA 4---");//Forma 4;
let myArrayBi4 = new Array(5).fill().map(() => new Array(4));
console.log(myArrayBi4);
//XXXX
//XXXX
//XXXX
//XXXX
//XXXX


console.log("-----------Operaciones con Arrays-------------");
// OPERACIONES CON ARRAYS

// si queremos conservar el array sin cambios hacerle una copia antes

 // join
 console.log("\n\tjoin");//concatena los elementos del array separado por el elemento que este entre ()
const elements = ["fire","air","water"];
let str = elements.join("-"); 
// lo transforma a string
console.log(str);

// split 
console.log("\n\tsplit");//string, convertirlo a array
const strNumbers = "1,2,3,4,5,6,7,8,9,10"; 
const myArrayNumbers = strNumbers.split(","); // la , separa los elementos para q cada uno sea un valor distinto
console.log(myArrayNumbers); 

// push 
console.log("\n\tpush"); //añade un elemento al final
elements.push("dirt");
console.log(elements);

// pop 
console.log("\n\tpop"); //borra el último elemento y lo devuelve
let myElement = elements.pop();
console.log(myElement);
console.log(elements);

// shift 
console.log("\n\tshift"); //borra el primer elemento y lo devuelve
let firstElement = elements.shift();
console.log(firstElement);
console.log(elements);

// reverse --> modifica el array original
console.log("\n\treverse"); //le da la vuelta al array
const reversedElements = [...elements.reverse()];
console.log(reversedElements);
console.log(elements);
elements.reverse();
console.log(reversedElements);
console.log(elements);

//sort --> modifica el array original
console.log("\n\tsort"); //ordena el array alfabeticamente
let myNumbers = [100,5,15,1,99];
myNumbers.sort();
console.log(myNumbers);
//ordenar el array pero por numeros
// myNumbers.sort(function (first, second){
//     if(first>second){ // para q ordene al reves (first<second)
//         return 1;
//     }else{return -1;}
// });
// console.log(myNumbers);

//ordenar acortado
myNumbers.sort((a,b)=> a>b?1:-1); 
console.log(myNumbers);

myNumbers.sort((a,b)=> a-b); // > --> de menor a mayor
myNumbers.sort((a,b)=> b-a); // > --> de mayor a menor
console.log(myNumbers);



// slice (inicio, [final]); -> desde inicio hasta final -1
console.log("\n\tSlice");
let nombres = ["Rita","Manuel","Miguel","Ana","Vanesa"];
let nombresMasculinos = nombres.slice(1,3); //de la posicion 1 a 3 (-1 que es el 2) 
console.log(nombresMasculinos);
console.log(nombres.slice(-2)); // las n últimas posiciones



//filter:  crea un nuevo array con los elementos filtrados
console.log("\n\tFilter");
let users = [
    {name: "John", age: 34},
    {name: "Amy", age: 20},
    {name: "Amador", age: 25},
    {name: "Thomas", age: 10}
];
let filteredUsers =  users.filter(function (user){
    return user.age > 15;
}); // devuelve solo si es verdadero
console.log(filteredUsers);

// con funcion flecha
let filteredUsers2 = users.filter ((user) => user.age>15);
console.log(filteredUsers2);

//find:  devuelve el primer elemento del array que cumpla la condición
console.log("\n\tFind");
let user = users.find (function(user){
    return user.name.match(/A[a-z]*/);
}); //solo devuelve el primero q empieza por A (aunque esté la g de global y haya mas de uno que cumpla la condición)
console.log(user);

let user2 = users.find((user)=>user.name.match(/A[a-z]*/) );
console.log(user2);



//some:  devuelve true/false . Comprueba si al menos un elemento cumple la condición (no dice cuantos, solo si si o si no)
console.log("\n\tSome");
let hasUser = users.some(function(user){
 return user.age == 10;
});
hasUser?console.log("PO ZI"):console.log("PO NO");

let hasUser2 = users.some((user)=> user.age == 11);
hasUser2?console.log("PO ZI"):console.log("PO NO");


//findIndex:  devuelve el índice del primer elemento del array que cumpla la condición
console.log("\n\tFindIndex");
let index = users.findIndex(function(user){
    return user.age==25;
});
console.log(index); // si no lo encuentra da -1

let index2 = users.findIndex((user) => user.age ==25);
console.log(index2);

//concat -> concatena arrays // copia por valor, no por referencia
console.log("\n\tConcat");
let array1 = ["a","b","c"];
let array2 = ["d","e","f"];
let array3 = array1.concat(array2);
console.log(array3);

array1[2] = "X";
console.log(array3); 
let array4 = [...array1,...array2]; // es lo mismo que concat
console.log(array4);
array2[2] = "Z";
console.log(array4);




//reduce:  
console.log("\n\tReduce");

}