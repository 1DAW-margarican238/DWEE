"use strict"
{
// Realiza un programa con dos botones “Comenzar Saludos” y “Parar Saludos”. Al hacer click en “Comenzar Saludos”, lance un setInterval que cada 5 segundos muestra un “alert” con “Hola”. El botón “Parar Saludos” parará esa secuencia.

    let btn1 = document.createElement("button");
    btn1.textContent ="Start Greeting";
    document.body.appendChild(btn1);

    let btn2 = document.createElement("button");
    btn2.textContent ="Stop greeting";
    document.body.appendChild(btn2);
    let listaId =  new Array();

    

    let cont =1;
    btn1.addEventListener("click", (ev)=>{
      let id = setInterval(function(){
        alert("Hello");
        console.log("Greet nº: " + cont++)
        },5000);
        listaId.push(id);
    } );

    btn2.addEventListener("click", (ev)=>{
        listaId.forEach(elem => clearInterval(elem));
        listaId = [];
        console.log("You stopped all the greeting");
    })

}