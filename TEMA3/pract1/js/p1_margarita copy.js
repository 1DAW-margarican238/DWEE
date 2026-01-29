"use strict"
{
    const divButtons = document.querySelector("#idButtons");
    const divContent = document.querySelector("#idContent");
    
// 1 ----------------------------------------------------------------------

    let btnTask1 = document.createElement("input");
    btnTask1.setAttribute("type", "button");
    btnTask1.setAttribute("value", "LOAD IMAGES");
    btnTask1.setAttribute("class", "btn btn-info m-2");
    divButtons.appendChild(btnTask1);

// 2 ----------------------------------------------------------------------

    let btnTask2 = document.createElement("input");
    btnTask2.setAttribute("type", "button");
    btnTask2.setAttribute("value", "ADD USER");
    btnTask2.setAttribute("class", "btn btn-info m-2");
    divButtons.appendChild(btnTask2);

// 3 ----------------------------------------------------------------------

    let btnTask3 = document.createElement("input");
    btnTask3.setAttribute("type", "button");
    btnTask3.setAttribute("value", "MODIFY IMAGES");
    btnTask3.setAttribute("class", "btn btn-info m-2");
    divButtons.appendChild(btnTask3);

// 4 ----------------------------------------------------------------------

    let btnTask4 = document.createElement("input");
    btnTask4.setAttribute("type", "button");
    btnTask4.setAttribute("value", "MODIFY NAME");
    btnTask4.setAttribute("class", "btn btn-info m-2");
    divButtons.appendChild(btnTask4);

// 5 ----------------------------------------------------------------------

    let btnTask5 = document.createElement("input");
    btnTask5.setAttribute("type", "button");
    btnTask5.setAttribute("value", "DELETE PROFE");
    btnTask5.setAttribute("class", "btn btn-info m-2");
    divButtons.appendChild(btnTask5);

// 6 ----------------------------------------------------------------------

    let btnTask6 = document.createElement("input");
    btnTask6.setAttribute("type", "button");
    btnTask6.setAttribute("value", "DELETE HERO");
    btnTask6.setAttribute("class", "btn btn-info m-2");
    divButtons.appendChild(btnTask6);

// Clean ------------------------------------------------------------------

    let btnClean = document.createElement("input");
    btnClean.setAttribute("type", "button");
    btnClean.setAttribute("value", "Clean DOM");
    btnClean.setAttribute("class", "btn btn-danger m-2");
    divButtons.appendChild(btnClean);

    btnClean.onclick = function (e){
        cleanScreen();
    
    };

    function cleanScreen () {
        while (divContent.firstChild) {
            divContent.removeChild(divContent.firstChild);
        }
    }

//--------------------------------------------------------------------------------

    let myRequest = new Request ("http://127.0.0.1:3000/usuarios");
    let myRequest2 = new Request ("http://localhost:3000/heroes");

// 1 ----------------------------------------------------------------------
   
    btnTask1.addEventListener("click", function (event){
        let divImg = document.createElement("div");
        fetch (myRequest)
        .then(response => {
            if (response.ok) {
                return response.json();
            }else{
                console.log(response.ok);
                console.log(response.status);
                throw new Error("Error en el fetch");
            }
        })
        .then(response => {
            response.forEach(usuario => {
                let img = document.createElement("img");
                img.src = usuario.foto;
                img.style.height = "30vh";
                divImg.append(img);
            });
        })
        .catch(error => console.log("ERROR: " + error))

        divContent.append(divImg);
    });


// 2 ----------------------------------------------------------------------

    btnTask2.addEventListener("click", function (){
        fetch (myRequest, {
            method: "POST",
            body: JSON.stringify({
                id: "4",
                usuario: "domingo",
                email: "drodrod463@g.educaand.es",
                foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5OcenhjMWStk-wYi2thhegHJq2XW7drqM2g&s"
            })
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            }else{
                console.log(response.ok);
                console.log(response.status);
                throw new Error("Error en el fetch");
            }
        })
        .then(response => console.log(response))
        .catch(error => console.log("ERROR: " + error))
        
    });

// 3 ----------------------------------------------------------------------
    
    btnTask3.addEventListener("click", function (e) {
        let newRequest = new Request("http://127.0.0.1:3000/usuarios/1");
        fetch (newRequest)
        .then(response => {
            if (response.ok) {
                return response.json();
            }else{
                console.log(response.ok);
                console.log(response.status);
                throw new Error("Error en el fetch");
            }
        })
        .then(response => {
            modifyImages(response.foto);
        })
        .catch(error => console.log("ERROR: " + error))

    })

    function modifyImages (urlImg) {
        console.log(urlImg);
        fetch(myRequest)
        .then(response => {
            if (response.ok) {
                return response.json();
            }else{
                console.log(response.ok);
                console.log(response.status);
                throw new Error("Error en el fetch");
            }
        })
        .then(response => {
            response.forEach(element => {
                let patchRequest = new Request(myRequest.url + "/" + element.id);
                fetch(patchRequest, {
                    method: "PATCH",
                    body: JSON.stringify({
                        foto: urlImg,
                    })
                })
            });
        })
        .catch(error => console.log("ERROR: " + error));
    }

// 4 ----------------------------------------------------------------------

    btnTask4.addEventListener("click", function (e) {
        let newRequest = new Request("http://127.0.0.1:3000/usuarios/4");
        fetch(newRequest)
        .then(response => response.json())
        .then(response => 
            fetch(newRequest, {
                method: "PUT",
                body: JSON.stringify({
                    id: response.id,
                    usuario: response.usuario + "Rodriguez",
                    email: response.email,
                    foto: response.foto
                })
            })
        )
            
    })

// 5 ----------------------------------------------------------------------

    btnTask5.addEventListener("click", function (event){
        fetch(myRequest)
        .then(response => {
            if (response.ok) {
                return response.json();
            }else{
                console.log(response.ok);
                console.log(response.status);
                throw new Error("Error en el fetch");
            }
        })
        .then(response => {
            let select = document.createElement("select");
            select.style.width = "100%";
            let button = document.createElement("button");
            button.textContent = "Enviar";
            button.style.width = "100%";

            response.forEach(usuario => {
                let opt = document.createElement("option");
                opt.textContent = usuario.id;
                opt.value = usuario.id;
                select.append(opt);
            })

            button.addEventListener("click", () => {
                let newRequest = myRequest.url + "/" + select.value;
                fetch(newRequest, {
                    method: "DELETE"
                })
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }else{
                        console.log(response.ok);
                        console.log(response.status);
                        throw new Error("Error en el fetch");
                    }
                })
                .catch(error => console.log("ERROR: " + error));
            })
            divContent.append(select);
            divContent.append(button);
            
        })
        .catch(error => console.log("ERROR: " + error));
    });

// 6 ----------------------------------------------------------------------

    btnTask6.addEventListener("click", function (event){
        fetch(myRequest2)
        .then(response => {
            if (response.ok) {
                return response.json();
            }else{
                console.log(response.ok);
                console.log(response.status);
                throw new Error("Error en el fetch");
            }
        })
        .then(response => {
            let select = document.createElement("select");
            select.style.width = "100%";
            let button = document.createElement("button");
            button.textContent = "Enviar";
            button.style.width = "100%";

            response.forEach(heroe => {
                let opt = document.createElement("option");
                opt.textContent = heroe.id;
                opt.value = heroe.id;
                select.append(opt);
            })

            button.addEventListener("click", () => {
                let newRequest = myRequest2.url + "/" + select.value;
                fetch(newRequest, {
                    method: "DELETE"
                })
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }else{
                        console.log(response.ok);
                        console.log(response.status);
                        throw new Error("Error en el fetch");
                    }
                })
                .catch(error => console.log("ERROR: " + error));
            })
            divContent.append(select);
            divContent.append(button);
            
        })
        .catch(error => console.log("ERROR: " + error));
 
    });


}