"use strict"
{
// Realiza un formulario donde se pueda introducir y enviar un DNI con letra. El formulario deberá validar si la letra es correcta al:
// a) Perder el foco del campo de texto donde se introduce el DNI.
// b) Enviar el formulario, cancelando el envío si el formato no es correcto. 
let formulario = document.querySelector("form");
    const datos = new FormData(formulario);
    console.log(datos.get("dni"));

    let dni = datos.get("dni");
    dni.addEventListener("focusout", (ev)=>{

    });

    formulario.addEventListener("submit", (e)=>{
        e.preventDefault();
        //if()
    
        formulario.submit();
    });

}