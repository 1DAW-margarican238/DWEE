"use strict"
{
    // fetch("https://jsonplaceholder.typicode.com/posts")
    // .then(response => response.json())
    // .then(datos => {
    //     console.log(datos[1].body);
    // });

    // fetch("https://jsonplaceholder.typicode.com/posts")
    // .then(response => response.text())
    // .then(datos => {
    //     console.log(datos);
    // });

    // fetch("https://jsonplaceholder.typicode.com/posts/1")
    // .then(response => response.json())
    // .then(datos => {
    //     console.log(datos);
    // })
    // //después del ultimo .then se puede poner...
    // .catch(error=> console.error(error));

    // fetch("https://jsonplaceholder.typicode.com/posts/1")
    // .then(response => {
    //     console.log(response.status);
    //     console.log(response.ok);
    //     if (response.ok) {
    //     return response.json();
    //     } else {
    
    //     }
    // })
    // .then(datos => {
    //     console.log(datos);
    // })
    // .catch(error => {
    //     console.error("Error capturado:", error);
    // });


    //si no quiero usar .then puedo usar await pero hace falta poner delante de la función 'async'

    // async function obtenerPost() {
    //     const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    //     const post = await response.json();
    //     console.log(post.title);
    // }
    // obtenerPost();

    //acceder a un archivo txt en local
    // fetch("../resources/texto.txt")
    // .then(response => response.text())
    // .then(datos => console.log(datos));

    // fetch("../resources/texto.txt")
    // .then(function(response){
    //     let datos = response.text();
    //     return datos;
    // })
    // .then(function (texto){
    //     console.log(texto);
    //     console.log(texto.length);
    // });

    //acceder a un archivo foto en local

    // fetch("../resources/flores.jpg")
    // .then(function(response){
    //     let datos = response.text();
    //     return datos;
    // })
    // .then(function (texto){
    //     console.log(texto);
    //     console.log(texto.length);
    // }); //texto se imprime en carácteres especiales

    fetch("../resources/flores.jpg")
    .then(function(response){
        let datos = response.blob();
        return datos;
    })
    .then(function (miBlob){
        console.log(miBlob); // tamaño y el tipo 
        console.log(miBlob.size);//tamaño, lo q ocupa
        console.log(miBlob.type); //el tipo (image/jpeg)

        //pintar la foto por pantalla
        let objectUrl = URL.createObjectURL(miBlob);
        let myImage = document.createElement("img");
        myImage.setAttribute("src", objectUrl);
        myImage.setAttribute("height", "200px");
        document.body.appendChild(myImage);
    });


    
}