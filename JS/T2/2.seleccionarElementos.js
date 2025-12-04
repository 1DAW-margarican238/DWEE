"use strict"
{

/**
 * 
 */


//para seleccionar elementos
let listaA = document.getElementsByTagName("a");
console.log(listaA);
for (let a of listaA) {
    console.log(a); // saca todo
    console.log(a.textContent); // solo saca el texto
     console.log(a.href); // da solo el enlace
}



//getElementsByClassName //ver los elemetnos de una clase
let listaUls = document.getElementsByClassName("cListaVehiculos");

for (let ul of listaUls) {
    console.log(ul);
    console.log(ul.textContent);
}


console.log("------- Get Elements by Name -------");
//getElementsByName
listaUls = document.getElementsByName("nLista"); //devuelve un node list
console.log(listaUls);
listaUls.forEach(element => {
    console.log(element);
    // console.log(element.getAttribute("name")); // los elementos del atributo
    console.log(element.textContent);
});

console.log("------- Get Elements by Id -------");
let ul = document.getElementById("idCiclomotores");
console.log(ul);
console.log(ul.textContent);

//querySelector
let myCar = document.querySelector("#idCoches"); // seleccionar por id // #
console.log(myCar);

let myCharacters = document.querySelector(".cListaPersonajes"); // seleccionar por class // .
console.log(myCharacters);

let myP = document.querySelector("p");
console.log(myP); // pilla solo el primer "p"
console.log(myP.innerText); // igual que textContent

let listaP = document.querySelectorAll("p"); //pilla todos los "p" // devuelve un NodeList
listaP.forEach(p=>{
    console.log(p);
    console.log(p.textContent);
});

listaUls = document.querySelectorAll("ul");
    console.log(listaUls);
    console.log(listaUls[0].textContent); // el contenido del primero de la lista; las motos

listaUls = document.querySelectorAll('[name ="nLista"]');
console.log(listaUls);
console.log(listaUls[1].textContent); // el contenido del segundo  de la lista; los coches







}