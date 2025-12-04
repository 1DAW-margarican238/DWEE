"use strict"
{
// Realiza un programa que tenga 3 elementos <p> y al hacer salir el puntero del ratón sobre ellos desaparezcan (se oculten) y al hacer doble clic (los elimine del DOM). También deberá tener un botón “Reaparecer” que hará que aparezcan todos los elementos desaparecidos (pero no los eliminados). 
// Los 3 párrafos y el botón tienen que crearse e insertarse desde el código Javascript, no desde HTML

    let btnShow = document.createElement("button");
    btnShow.textContent ="Show hiddden paragraphs";
    document.body.appendChild(btnShow);

    let p1 = document.createElement("p");
    p1.textContent ="Parrafo 1";
    document.body.appendChild(p1);
    p1.style.background = "salmon";
    p1.style.width = "65px";

    let p2 = document.createElement("p");
    p2.textContent ="Parrafo 2";
    document.body.appendChild(p2);
    p2.style.background = "salmon";
    p2.style.width = "65px";

    let p3 = document.createElement("p");
    p3.textContent ="Parrafo 3";
    document.body.appendChild(p3);
    p3.style.background = "salmon";
    p3.style.width = "65px";
    
    // document.addEventListener("mousemove",function(evento){
    //      myP2.innerHTML = "X=" + evento.x + " ; Y=" + evento.y;
    //      myP2.innerHTML += "<br>"+"X=" + evento.screenX + " ; Y=" + evento.screenY;

    //   });

    p1.addEventListener("mouseout", function (evento){
        p1.style.visibility ="hidden";
        console.log("Paragraph 1 is hidden");
    });
    p1.addEventListener("dblclick",()=>{
        p1.remove();
        console.log("Paragraph 1 is removed");

    })

    p2.addEventListener("mouseout", function (evento){
        p2.style.visibility ="hidden";
        console.log("Paragraph 2 is hidden");
    });
    p2.addEventListener("dblclick",()=>{
        p2.remove();
        console.log("Paragraph 2 is removed");
    })

    p3.addEventListener("mouseout", function (evento){
        p3.style.visibility ="hidden";
        console.log("Paragraph 3 is hidden");
    });
    p3.addEventListener("dblclick",()=>{
        p3.remove();
        console.log("Paragraph 3 is removed");
    })

    btnShow.addEventListener("click", ()=>{
        let element = document.querySelectorAll("p");
        for(let el of element){
          if(el.style.visibility ="hidden"){
            el.style.visibility = "visible";
          }
        }
    });



}