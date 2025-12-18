"use strict"
{
// . Realiza un formulario que pida una dirección de email y la valide antes de enviarla:
// a) Debe validar si el email sigue el formato texto@servidor.loquesea
// b) Además de validar el formato anterior, debe comprobar que servidor.loquesea este como servidor admitido en un array de servidores llamado “listaServidores”.
// Dicho array debe ser definido a mano en el código.
// Ejemplo:
// let listaServidores=["terra.es","google.com","marca.es","yahoo.es"];

    let listaServidores=["terra.es","google.com","marca.es","yahoo.es"];
    let formulario = document.querySelector("form");
    let email = document.querySelector("#email");

    function validarEmail(email) {
        let regExp = /^[a-z0-9]+@[a-z]+\.[a-z]+$/i;
        return regExp.test(email);
    }

    function validarServidor(email) {
        let partes = email.split("@");
        let servidor = partes[1];

        for (let s of listaServidores) {
            if (servidor === s) {
                return true;
            }
        }
        return false;
    }



    formulario.addEventListener("submit", (ev) => {
        if (!validarEmail(email.value)) {
            ev.preventDefault();
            let p = document.createElement("p");
            p.textContent ="Email escrito incorrectametne";
            p.style.color ="red"
            document.body.appendChild(p);
            setTimeout(() => {
                p.remove();
            }, 3000);
            
        }
        else if (!validarServidor(email.value)) {
            ev.preventDefault();
            let p = document.createElement("p");
            p.textContent ="Servidor no encontrado";
            p.style.color ="red"
            document.body.appendChild(p);
            setTimeout(() => {
                p.remove();
            }, 3000);
        }
    });




}