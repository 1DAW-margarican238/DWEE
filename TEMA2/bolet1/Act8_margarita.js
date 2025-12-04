"use strict"
{
// Realiza un programa que al hacer doble click en la pantalla del navegador, cambie el fondo a un color aleatorio. 

//me falta lo del color aleatorio q se haria como rgb y math random
    document.addEventListener("dblclick", (ev)=>{
        document.body.style.setProperty("background-color","green");
    })

}