"use strict"
{
    /**Realiza una Web que almacene en una cookie el número de visitas que has realizado, incrementado el valor del número de visitas a cada visita realizada. La web debe tener una interfaz para visualizar el contenido de la cookie y para eliminar la cookie. */
    /**Realiza el ejercicio anterior usando localStorage y SessionStorage */

    let visitas;

    if(!sessionStorage.getItem("visitas")){
        visitas = 1;
    }else{
        visitas = parseInt(sessionStorage.getItem("visitas")) +1;
    }
    sessionStorage.setItem("visitas", visitas);
    console.log(document.sessionStorage);

    let mensaje = document.createElement("p");
    mensaje.textContent = "SessionStorage - El número de visitas es: " + sessionStorage.getItem("visitas");
    document.body.appendChild(mensaje);

    let button = document.createElement("button");
    button.textContent ="Eliminar sessionStorage";
    document.body.appendChild(button);

    button.addEventListener("click",(ev)=>{
        sessionStorage.removeItem("visitas");
        location.reload();
    });
}