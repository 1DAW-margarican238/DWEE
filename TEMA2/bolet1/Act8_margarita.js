"use strict"
{
// Realiza un programa que al hacer doble click en la pantalla del navegador, cambie el fondo a un color aleatorio. 
    let text = document.createElement("p");
    text.textContent="Click twice!";
    document.body.appendChild(text);
    
    document.addEventListener("dblclick", ()=>{
        let randColor = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
        document.body.style.setProperty("background-color",randColor);
    })

}