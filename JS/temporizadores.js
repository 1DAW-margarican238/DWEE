"use strict"
{

//SETTIMEOUT
//settimeout se ejecuta una única vez
//se ejecuta una única vez
//al pasar el tiempo (3000) se ejecuta la función
// y ya no se ejecuta más

setTimeout(function(){
let d = new Date().toLocaleDateString();
console.log("set timeout");
}, 3000);


//SETINTERVAL
// se ejecuta indefinidamente
//al pasar el tiempo se ejecuta la función
// salvo que no lo paremos seguira ejecutándote tras tal tiempo

let id = setInterval(function(){
let d = new Date().toLocaleDateString();
console.log(d);
},2000);

// clearInterval(id);




}