"use strict"
{

    let myForm = document.querySelector("#idForm1");
    myForm.addEventListener("submit",(ev)=>{
        let passwd = document.querySelector("#idPasswd");
        let textBox = document.querySelector("#idText1");
        let email = document.querySelector("#idEmail1");
        //Validar que los 3 campos cumplen las restricciones
        console.log(textBox.value.length);
        if(!(textBox.value.length == 4) || !validarTexto(textBox.value)){
            ev.preventDefault();
            console.log("error");
            if(!(textBox.value.length ==  4)){
                mostrarMensaje("La longitud debe ser 4", textBox);
            } else if( !validarTexto(textBox.value)){
                  mostrarMensaje("Debe empezar por la letra a", textBox);
            }
        }
    });

    function validarTexto (t){
        let regExp = /^a/i;
        return regExp.test(t);
    }

    function mostrarMensaje(m, elemento){
        let p =  document.createElement("p");
        p.textContent = m;
        p.setAttribute("class", "error");
        elemento.insertAdjacentElement("afterend", p);
        setTimeout((ev)=>{
            p.remove();
        },3000); //timeout para q el error dure solo 3 segundos
    }


}