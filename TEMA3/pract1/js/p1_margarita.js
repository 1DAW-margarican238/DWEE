"use strict"
{
    const divButtons = document.querySelector("#idButtons");
    const divContent = document.querySelector("#idContent");

    let btnTask1 = document.createElement("input");
    btnTask1.setAttribute("type", "button");
    btnTask1.setAttribute("value", "LOAD IMAGES");
    btnTask1.setAttribute("class", "btn btn-info m-2");
    divButtons.appendChild(btnTask1);

    let btnTask2 = document.createElement("input");
    btnTask2.setAttribute("type", "button");
    btnTask2.setAttribute("value", "ADD USER");
    btnTask2.setAttribute("class", "btn btn-info m-2");
    divButtons.appendChild(btnTask2);

    let btnTask3 = document.createElement("input");
    btnTask3.setAttribute("type", "button");
    btnTask3.setAttribute("value", "MODIFY IMAGES");
    btnTask3.setAttribute("class", "btn btn-info m-2");
    divButtons.appendChild(btnTask3);

    let btnTask4 = document.createElement("input");
    btnTask4.setAttribute("type", "button");
    btnTask4.setAttribute("value", "MODIFY NAME");
    btnTask4.setAttribute("class", "btn btn-info m-2");
    divButtons.appendChild(btnTask4);

    let btnTask5 = document.createElement("input");
    btnTask5.setAttribute("type", "button");
    btnTask5.setAttribute("value", "DELETE PROFE");
    btnTask5.setAttribute("class", "btn btn-info m-2");
    divButtons.appendChild(btnTask5);

    let btnTask6 = document.createElement("input");
    btnTask6.setAttribute("type", "button");
    btnTask6.setAttribute("value", "DELETE HERO");
    btnTask6.setAttribute("class", "btn btn-info m-2");
    divButtons.appendChild(btnTask6);

    let btnClean = document.createElement("input");
    btnClean.setAttribute("type", "button");
    btnClean.setAttribute("value", "Clean DOM");
    btnClean.setAttribute("class", "btn btn-danger m-2");
    divButtons.appendChild(btnClean);

    btnClean.onclick = function (e){
        cleanScreen();
    
    };

    let myRequest = new Request ("http://127.0.0.1:3000/usuarios");
    let myRequest2 = new Request ("http://localhost:3000/heroes")
   
    btnTask1.addEventListener("click", function (event){
    let divImages = document.createElement("div");
    fetch (myRequest)
    .then(response=>response.json())
    .then((arrayImages)=>{
        arrayImages.forEach(user => {
        let img  = document.createElement("img");
        img.setAttribute("src", user.foto);
        img.setAttribute("height", "200px");
        divImages.appendChild(img);
        });
    })
    .catch((error)=>{
        console.log("ERROR: " + error);
    })
    divContent.appendChild(divImages);

    });


   

    function cleanScreen () {
        while (divContent.firstChild) {
            divContent.removeChild(divContent.firstChild);
        }
    }

    /**añadir un nuevo usuario con datos reales tuyos; ponte el id=”4”. Los datos del json que insertas pueden estar en el propio código */
    btnTask2.addEventListener("click", function (){
       fetch(myRequest,{
        method: "POST",
        body: JSON.stringify({
            "id": "4",
            "usuario": "Margarita",
            "email": "margarita@gmail.com",
            "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Bandera_de_Andalucia.svg/2560px-Bandera_de_Andalucia.svg.png"
            })
       })
       .then(response => response.json())
       .catch((error)=>{
            console.log("ERROR: " + error);
        })
    });

    
    /**modificar las imágenes de todos los usuarios poniéndoles a todos la imagen del 1º de ellos. La url de la imagen la tienes que coger accediendo al valor de la clave “foto” del json que ocupa la posición 0 del array usuarios. No modifiques el resto de campos, no se tocan*/    
    btnTask3.addEventListener("click", function (e) {
        fetch(myRequest)
        .then(response => response.json())
        .then(usuarios =>{
        })
        .catch((error)=>{
            console.log("ERROR: " + error);
        })
    });


    // function modifyImages (urlImage, usuarios){

    // }



    // fetch (myRequest)
    //     .then(response=>response.json())
    //     .then((arrayImages)=>{
    //             arrayImages.forEach(user => {
    //             let img  = document.createElement("img");
    //             img.setAttribute("src", user.foto);
    //             img.setAttribute("height", "200px");
    //             divImages.appendChild(img);
    //         });
    //     })
    //     .catch((error)=>{
    //         console.log("ERROR: " + error);
    //     })
    //     divContent.appendChild(divImages);
    // });



    btnTask4.addEventListener("click", function (e) {
        let p = document.createElement("p");
        p.textContent = "Not implemented yet";
        p.style.setProperty("color", "red");
        divContent.appendChild(p);
    })

    btnTask5.addEventListener("click", function (event){
        let p = document.createElement("p");
    p.textContent = "Not implemented yet";
    p.style.setProperty("color", "red");
    divContent.appendChild(p);
 
    });



     btnTask6.addEventListener("click", function (event){
       let p = document.createElement("p");
    p.textContent = "Not implemented yet";
    p.style.setProperty("color", "red");
    divContent.appendChild(p);
 
    });


}