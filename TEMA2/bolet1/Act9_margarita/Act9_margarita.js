"use strict"
{
//Realiza un programa que tenga una imagen de una bola de papel y una papelera vacía.
//Cuando se arrastre la bola de papel a la papelera vacía, deberá cambiar la imagen de la papelera vacía a una papelera llena.

    let papel = document.querySelector (".papel"); 
    let papelera_vacia = document.querySelector (".papelera_vacia"); 
    let btn = document.querySelector("button");
    papel.draggable = true;

    
    
    papelera_vacia.addEventListener("dragover", (ev)=>{
        ev.preventDefault(); 
    });
    papelera_vacia.addEventListener("drop", (ev)=>{
        papelera_vacia.src = "papelera_llena.png";
        papel.src= "";
        btn.style.visibility = "visible";
    }); 

    btn.addEventListener("click", ()=>{
        papelera_vacia.src = "papelera_vacia.png";
        papel.src= "papel.png";
        btn.style.visibility = "hidden";
    })

    

}