"use strict"
{
    /**Realiza una Web que almacene en una cookie el número de visitas que has realizado, incrementado el valor del número de visitas a cada visita realizada. La web debe tener una interfaz para visualizar el contenido de la cookie y para eliminar la cookie. */

    function setCookie (nombreCookie, valorCookie, diasExpiracion) {
        let fechaActual = new Date();
        fechaActual.setTime(fechaActual.getTime() + (diasExpiracion*24*60*60*1000));
        let expires = "expires="+fechaActual.toUTCString();
        let nuevaCookie = nombreCookie + "=" + valorCookie + ";" + expires + ";path=/";
        document.cookie = nuevaCookie; 
    }

    function getCookie(cname) { 
        let name = cname + "=";
        let ca = document.cookie.split(';');
        for(let i = 0; i < ca.length; i++) { 
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    function deleteCookie(cname) { 
        document.cookie = cname+'=; expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/'; 
    }

    let visitas;

    if(!getCookie("visitas")){
        visitas = 1;
    }else{
        visitas = parseInt(getCookie("visitas")) +1;
    }
    setCookie("visitas",visitas, 7);
    console.log(document.cookie);

    let mensaje = document.createElement("p");
    mensaje.textContent = document.cookie;
    document.body.appendChild(mensaje);

    let button = document.createElement("button");
    button.textContent ="Elimianr cookie";
    document.body.appendChild(button);

    button.addEventListener("click",(ev)=>{
        deleteCookie("visitas");
    })






    
}