"use strict"
{
//Realiza un programa que cuando se pulse un botón con el texto “Nuevo número”, añada un elemento con un número aleatorio a una lista desordenada (elemento UL). 
//Además crea otro botón que permita borrar los elementos de la lista, de uno en uno, desde el último hasta el primero. Cada clíck elimina un elemnto. Controlar posibles errores.
//El número aleatorio debe estar comprendido entre 1 y 100

    let myBtn = document.createElement("button");
    myBtn.textContent="New Number";
    document.body.appendChild(myBtn);

    let myBtn2 = document.createElement("button");
    myBtn2.textContent  = "Delete number";
    document.body.appendChild(myBtn2);
    let ul = document.createElement("ul");
    document.body.appendChild(ul);
    
    
    //add number
    myBtn.addEventListener("click",function(event){
        let ranNumber = Math.round(Math.random()*100)+1;
        let li = document.createElement("li");
        li.textContent =  ranNumber;
        ul.appendChild(li);
    });

   
    //delete number
    myBtn2.addEventListener("click",function(event){
        if(ul.children.length > 0){
            ul.removeChild(ul.lastChild);
        }else{
            alert("There are not any numbers left");
        }
    })


}