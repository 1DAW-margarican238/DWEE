"use strict"
{
    /**Realiza una web del tipo TODO list donde puedas ir guardando tareas y prioridad (alta, media y baja) y las vaya mostrando por orden de prioridad.  */

    /**
     * guardar la foto en localstorage
al darle al botón que se muestre
guardar el object.urb
hacer parse.stringify
guardar en variable imagen, en localstorage

     */
    //insertar
    let myBtn = document.createElement("button");
    myBtn.textContent ="Click here";
    document.body.appendChild(myBtn);

    fetch("../../JS/resources/flores.jpg")
    .then(function(response){
        let datos = response.blob();
        return datos;
    })
    .then(function (miBlob){
        let objectUrl = URL.createObjectURL(miBlob);
        localStorage.setItem("imagen", JSON.stringify(objectUrl));
    });

    myBtn.addEventListener("click", (ev)=>{
        let fromLocalStorage = localStorage.getItem("imagen");
        let myImage = document.createElement("img");
        myImage.setAttribute("src", fromLocalStorage);
        document.body.appendChild(myImage);
    })






}