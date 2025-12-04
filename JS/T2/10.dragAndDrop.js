"use strict"
{
    let cajaRoja = document.querySelector (".cajaRoja"); 
    let cajaAzul = document.querySelector (".cajaAzul"); 
    //cajaRoja.draggable=true; //hacemos el elemento arrastrable desde el javaScript directamente
    let contenedor = document.querySelector (".contenedor");

    const finalMessage = document.getElementById("finalMessage");

    //Lo que arrastro: 
    //dragstart -> empezar
    //drag -> al arrastrar
    //dragend -> al terminar

    cajaRoja.addEventListener("dragstart", (ev)=>{
        // console.log("dragstart");
    });
    cajaRoja.addEventListener("drag", (ev)=>{
        // console.log("drag");
        draggedBox = ev.target;
        // console.log(ev.target); //al arrastrar se q elemetno es
    });
    cajaRoja.addEventListener("dragend", (ev)=>{
        // console.log("dragend");
    });


    cajaAzul.addEventListener("dragstart", (ev)=>{
        // console.log("dragstart");
    });
    cajaAzul.addEventListener("drag", (ev)=>{
        // console.log("drag");
        draggedBox = ev.target;
        // console.log(ev.target);

    });
    cajaAzul.addEventListener("dragend", (ev)=>{
        // console.log("dragend");
    });



    let draggedBox = 0; // variable para saber que item muevo


    //Para el contenedor: -> hay que hacer aquí los eventos
    //dragenter -> cuando el ratón  entra (solo una vez)
    //dragleave -> cuando el ratón esta fuera (solo una vez)
    //dragover -> cuando esta dentro 
    //drop -> cuando lo dejo caer

    contenedor.addEventListener("dragenter", (ev)=>{
        console.log("dragenter");
    });
    contenedor.addEventListener("dragleave", (ev)=>{
        console.log("dragleave");
    });
    contenedor.addEventListener("dragover", (ev)=>{
        console.log("dragover");
        ev.preventDefault(); //para que deje de hacer dragover y podamos hacer drop
    });
    contenedor.addEventListener("drop", (ev)=>{
        console.log("drop"); 
        contenedor.insertAdjacentElement("afterbegin", draggedBox);
        
    }); //para que el item se quede en el contenedor



    //Para que el contenedor pueda volver al documento
    document.body.addEventListener("dragover", (ev)=>{
        console.log("dragover");
        ev.preventDefault(); //para que deje de hacer dragover y podamos hacer drop
    });

    document.body.addEventListener("drop", (ev)=>{
        if(document.body === ev.target){
            document.body.insertAdjacentElement("afterbegin",draggedBox);
        }
    }); 






}
