"use strict"
{
    let myBtn4 = document.querySelector("#idButton4");
    myBtn4.onclick =  function(){
        alert("hello 4");
    }
    // a un elemento se le pueden capturar varios eventos, pero solo se ejecuta el último
    myBtn4.onclick =  function(){
        alert("hello 4-1");
    }
    //para evitar machacar los eventos se hace lo siguiente:
    let myBtn5 = document.querySelector("#idButton5");
    //(evento que queremos calcular, la función a ejecutar)
    myBtn5.addEventListener("click", function(){
        alert("Hello 5");
    });
    myBtn5.addEventListener("click", function(){
        alert("Hello 5-1");
    }); //se ejecutan los dos
    //en vez de poner la funcion dentro:
    let v = function(){
        alert("Hello 5-2");
    }
    myBtn5.addEventListener("click",v);

    //Evento DOMContentLoades se ejecuta sin esperar a que cargue ni el css ni las imagenes
    document.addEventListener("DOMContentLoaded", function(){
        console.log("HTML Cargado");
    });

    //Evento load se ejecuta cuando se ha cargado el HTML,el css y las imágenes
     window.addEventListener("load", function(){
        console.log("HTML con CSS e Imágenes Cargado");
    });

    


}

//si se pone dentro de los {}, no se ejecuta, no encuentra la funcion

function greet3(){
    alert("hello 3");
}
