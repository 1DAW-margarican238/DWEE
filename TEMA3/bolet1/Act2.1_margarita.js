"use strict"
{
    /**Realiza una Web que almacene en una cookie el número de visitas que has realizado, incrementado el valor del número de visitas a cada visita realizada. La web debe tener una interfaz para visualizar el contenido de la cookie y para eliminar la cookie. */
    /**Realiza el ejercicio anterior usando LocalStorage y SessionStorage */

    let visitas;

    if(!localStorage.getItem("visitas")){
        visitas = 1;
    }else{
        visitas = parseInt(localStorage.getItem("visitas")) +1;
    }
    localStorage.setItem("visitas", visitas);
    console.log(document.localStorage);

    let mensaje = document.createElement("p");
    mensaje.textContent = "LocalStorage - El número de visitas es: " + localStorage.getItem("visitas");
    document.body.appendChild(mensaje);

    let button = document.createElement("button");
    button.textContent ="Eliminar localStorage";
    document.body.appendChild(button);

    button.addEventListener("click",(ev)=>{
        localStorage.removeItem("visitas");
        location.reload();
    });
}