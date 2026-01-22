"use strict"
{
    let boton1 = document.createElement("input");
    boton1.setAttribute("type", "button");
    boton1.setAttribute("value", "Btn 1: Cargar Recurso");
    document.body.appendChild(boton1);

    let url ="https://jsonplaceholder.typicode.com/todos";
    let myRequest = new Request(url);
    boton1.addEventListener("click",(ev)=>{
        fetch (myRequest)
        .then((response)=>{
            if(response.ok){
                return response.json();
            }else{
                console.log(response.ok);
                console.log(response.status);
            
            }
            
        })
        .then((arrayJson)=>{
            arrayJson.forEach(json => {
                let p  = document.createElement("p");
                p.innerHTML = "<b>" +json.userId + " -</b> <i>" + json.title;
                document.body.appendChild(p);
            });
        })
        .catch((error)=>{
            console.log("ERROR: " + error);
        })
    })

    function insertBr (){
        for(let i =0;i<2;i++){
        let myBr = document.createElement("br");
        document.body.appendChild(myBr);
        };
    };
    insertBr();
    let boton2 = document.createElement("input");
    boton2.setAttribute("type", "button");
    boton2.setAttribute("value", "Btn 2: GET - json con id");
    document.body.appendChild(boton2);
    insertBr();
    
    let myValue = document.createElement("input");
    myValue.setAttribute("type","number");
    document.body.appendChild(myValue);
    boton2.onclick = function (evento){
        let url2 = url + "/" + myValue.value;
        let myRequest = new Request(url2);
        fetch(myRequest)
        .then(function(response){
            if(response.ok){
                return response.json();
            }else{
                console.log(response.ok);
                console.log(response.status);
                throw new Error ("Error en el fetch");

            }
        })
        .then((json)=>{
            let p  = document.createElement("p");
            p.innerHTML = "<b>" +json.userId +"-" +json.id+ " -</b> <i>" + json.title;
            document.body.appendChild(p);
            
        })
        .catch((error)=>{
            console.log("ERROR: " + error);
        })
    };

    





}