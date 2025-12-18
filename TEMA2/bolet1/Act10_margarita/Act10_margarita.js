"use strict"
{
// Realiza un formulario donde se pueda introducir y enviar un DNI con letra. El formulario deberá validar si la letra es correcta al:
// a) Perder el foco del campo de texto donde se introduce el DNI.
// b) Enviar el formulario, cancelando el envío si el formato no es correcto. 
    let formulario = document.querySelector("form");
    let dniInput = document.getElementById("dni");


    let arrayNum = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V',
'H','L','C','K','E'];

    function validarDNI(dni){
        let myRegex = /^[0-9]{8}[A-Za-z]$/;
        if (!myRegex.test(dni)){
            return false;
        } 
        let numero = parseInt(dni.substring(0, 8));
        let letra = dni.charAt(8).toUpperCase();
        let letraCorrecta = arrayNum[numero % 23];
        return letra === letraCorrecta;
    }

     dniInput.addEventListener("blur", () => {
        let dni = dniInput.value.trim();
        if (dni !== "" && !validarDNI(dni)) {
            let p = document.createElement("p");
            p.id = "error-dni";
            p.textContent = "Incorrect DNI, try again";
            p.style.color = "red";
            document.body.appendChild(p);
            setTimeout(() => {
                p.remove();
            }, 3000); 
        }
    });
    
    formulario.addEventListener("submit", (e)=>{
        e.preventDefault();
        let datos = new FormData(formulario);
        let dni = datos.get("dni").trim();
        if (!validarDNI(dni)) {
        let p = document.createElement("p");
        p.textContent ="Incorrect DNI, try again";
        p.style.color ="red"
        document.body.appendChild(p);
        setTimeout(() => {
            p.remove();
        }, 3000);
        return;
        }
        formulario.submit();
    });









}