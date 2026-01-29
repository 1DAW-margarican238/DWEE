"use strict"
{

    let boton1 = document.createElement("input");
    boton1.setAttribute("type", "button");
    boton1.setAttribute("value", "POST");
    document.body.appendChild(boton1);

    let url ="https://jsonplaceholder.typicode.com/todos";
    let myRequest = new Request(url);
    boton1.addEventListener("click",function(evento){
        fetch(myRequest,{
            method: "POST",
            body: JSON.stringify({
                userId: 500,
                title: "myownjason",
                completed: false,
                nombre: "Lo que quiera"
            })
        })
        .then(response =>response.json())
        .then(console.log)
    });
    
    let form = document.querySelector("#idForm1");
    form.addEventListener("submit",function(e){
        e.preventDefault();
        const data = new FormData(form);
        console.log("userId: " + data.get("userId")); //la clave es el name
        console.log("id: " + data.get("id"));
        console.log("title: " + data.get("title"));
        fetch(myRequest,{
            method: "POST",
            body: JSON.stringify({
                userId: data.get("userId"),
                title: data.get("title"),
                completed: true
            })
        })
        .then(response =>response.json())
        .then(console.log)
    });

    const url3="https://formsubmit.co/ajax/mcandur2504@g.educaand.es";
    const formulario2 = document.querySelector(".cFormulario2");
    formulario2.addEventListener("submit",function(e){
        e.preventDefault();
        const datos = new FormData(formulario2);
        fetch(url3,{
            method: "POST",
            body: datos
        })
        .then (response=>response.json())
        .then(datosRecibidos => console.log(datosRecibidos));
    });


    let boton2 = document.createElement("input");
    boton2.setAttribute("type", "button");
    boton2.setAttribute("value", "POST -JSONSERVER");
    document.body.appendChild(boton2);

    boton2.addEventListener("click", function (evento){
        
    })
}