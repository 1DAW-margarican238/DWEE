"use strict"
{
console.log("\n\tSET");
//los valores iguales no se añaden, no hay repeticiones
//podemos añadir todo tipo de diferentes valores
let mySet1 = new Set();
mySet1.add(1);
mySet1.add(2);
mySet1.add(2); //este no se añade porque ya existe
mySet1.add("a");
mySet1.add({});
mySet1.add({}); //este segundo también se añade
mySet1.add("Hola");
mySet1.add("hola");


console.log(mySet1); //pintar el contenido
console.log("Tengo: "+mySet1.size + " elementos en el Set");

//recorrer el contenido del SET (forof)
for(let elem of mySet1){
    console.log(elem)
};
mySet1.forEach(elem => console.log(elem));

//Crear un array a partir de un set
// from es un método estático que se ejecuta con el nombre de la clase //dese un método iterable
let myArray1 = Array.from (mySet1);
console.log(myArray1);

//crearse un set a partir de un array
let myArray2 = new Array (1,2,3,4,5,6,7,7,8,8,9,9);
let mySet2= new Set (myArray2);
console.log(myArray2); // 12 elementos
console.log(mySet2); //los repetidos se han eliminado //9 elementos

console.log("\n\t MÉTODOS");
//métodos del SET
/**
 * size
 * has
 * delete
 */

console.log(mySet2.has(10)); //false
console.log(mySet2.has(6)); //true

console.log(mySet2.delete(1)); //true (elimina ese elemento, no el que está en esa posición)
console.log(mySet2.delete(1)); //false // ya no lo tiene
mySet2.clear(); // elimina todos los elementos



console.log("\n\tMAP");
// MAP
// colección de datos identificados por una clave
let map= new Map(); //crear un mapa
//añadir un elemnto asociandolo a su clave
//clave //elemento
map.set("name", "Luis"); 
map.set("lastname", "Martínez"); 
map.set("age", 55); 
console.log(map);

console.log(map.size); //cant elementos del map
console.log(map.has("email")); // false // no existe la clave email
console.log(map.has("name")); // true // existe la clave name
console.log(map.get("name")); // valor asociado a tal clave

map.set("name", "Luis Enrique"); //sobreescribir la clave con el .set
console.log(map); //el 'name' ha cambiado


map.set({}, 10); //mi clave es un objeto literal vacío con el valor de 10
map.set(false, "muy falso"); //la clave es un booleano
console.log(map);
console.log(map.get({})); //undefined
let myExtrangeObject = {};
map.set(myExtrangeObject, 11);
console.log(map.get(myExtrangeObject));

//recorrer un map
map.forEach(elem => console.log(elem));
map.forEach(function(valor,clave){
    console.log(clave + ":" + valor);
}); // separo la clave del valor por :

for (let [clave,valor] of map) {
    console.log(clave + "=" + valor)
};

//creamos un mapa
let map2 = new Map ([
    ["name","Donald"],
    ["apellido","Trump"],
    ["age",79]
]);
console.log(map2);
let map2Keys = [...map2.keys()]; // copa de las claves
let map2Values = [...map2.values()]; // copia de los valores
console.log(map2Keys);
console.log(map2Values);





}