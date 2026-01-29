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

    insertBr();
    let url2 = "http://localhost:3000/members";


   



    let boton3 = document.createElement("input");
    boton3.setAttribute("type", "button");
    boton3.setAttribute("value", "Btn3 - Get son-server");
    document.body.appendChild(boton3);
    let myValue2 = document.createElement("input");
    myValue2.setAttribute("type", "number");
    document.body.appendChild(myValue2);
    boton3.onclick = function (evento) {
        let url3 = url2 + "/" + myValue2.value;
        console.log("URL3: " + url3);
        let myRequest3 = new Request(url3);
        fetch(myRequest3)
        .then(function(response){
            if(response.ok){
                return response.json();
            }else{
                console.log(response.ok);
                console.log(response.status);
                throw new Error ("Error en el fetch");

            }
        })
        .then(function(myJson){
            console.log(myJson);
            console.log(Array.isArray(myJson));
            if(Array.isArray(myJson)){
                myJson.forEach(json =>{
                    let p = document.createElement("p");
                p.textContent = json.id + " - " + json.userId + " - " + json.title + " - " + json.completed;
                document.body.appendChild(p);
                })

            }else{
                let p = document.createElement("p");
                p.textContent = myJson.id + " - " + myJson.userId + " - " + myJson.title + " - " + myJson.completed;
                document.body.appendChild(p);


            }
            // if(typeof myJson =="Array"){
            //     console.log("es Array")
            // }else{
            //     console.log("es un objeto")
            // }
        })
        .catch(function(error){
            console.log("Error: " + error);
        })

    };

    





}