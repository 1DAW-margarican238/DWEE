"use strict"
{
    let formulario = document.querySelector("#idFormulario");
    const datos = new FormData(formulario);
    console.log(datos.get("nombre"));
    console.log(datos.get("edad"));
    console.log(datos.get("email"));

    formulario.addEventListener("submit", (e)=>{
        e.preventDefault();
        const datos = new FormData(formulario);
        // let datos2 = new FormData(formulario);
        // datos2.append("dni","11223345G");
        // datos2.append("adress","Royal Str");
    
        for (let campo of datos.values()){
            console.log(campo);
        }
        for (let campo of datos.entries()){
            console.log(campo);
        }

        // formulario.submit();
    });
}