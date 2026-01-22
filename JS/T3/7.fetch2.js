"use strict"
{
   //IMÁGENES
    /**
 *  Carcar una imagen del disco duro, la guardar en localStorage y la muestra en el dom
 * 
 */

    // const fileInput = document.getElementById("fileInput");
    // const img = document.getElementById("preview");

    // document.getElementById("saveBtn").addEventListener("click", async () => {

    //     console.log("ENTRA");
    //     const file = fileInput.files[0];
    //     if (!file) return alert("Selecciona una imagen");
    //     console.log(file);
    //     // Crear una URL temporal para poder usar fetch
    //     const blobUrl = URL.createObjectURL(file);
    //     console.log(blobUrl)
    //     // Fetch del archivo
    //     const response = await fetch(blobUrl);
    //     const blob = await response.blob();
    //     console.log(blob)
    //     // Convertir a string codificado en base64
    //     const base64 = await blobToBase64(blob);
    //     console.log(base64)
    //     // Guardar en localStorage
    //     localStorage.setItem("foto", base64);

    //     // Mostrar en el DOM
    //     img.src = base64;

    //     URL.revokeObjectURL(blobUrl); // el navegador pierde la referencia  para liberar
    // });

    //     // Helper
    // function blobToBase64(blob) {
    //     return new Promise((callback) => {
    //         const reader = new FileReader(); // lectura asincrona de un fichero
    //         //evento loadend -> se dispara cuando se ha leído por completo un archivo (con éxito o sin éxito)
    //         // reader.result -> devuelve el contenido del archivo
    //         reader.onloadend = () => callback(reader.result);
    //         reader.readAsDataURL(blob); // codifica el string a string en base64
    //     });
    // }



    // // Cargar imagen guardada al recargar la página
    // const savedPhoto = localStorage.getItem("foto");
    // if (savedPhoto) {
    //     img.src = savedPhoto;
    // }

    /**
     * leer una API en formato JSON: https://randomuser.me/api
     *  */    

    // let myRequest = new Request("https://randomuser.me/api");
    // fetch (myRequest)
    // .then (function (response) {
    //     return response.json();
    // })
    // .then (function (myJSON){
    //     console.log(myJSON);
    //     console.log(myJSON.info.version);
    //     console.log(myJSON.results[0].name.last);
    // })
    // .catch (function () {
    //     console.log("ERROR: " + error);
    // })

    //with arrow functions
    let myRequest = new Request("https://randomuser.me/api");
    fetch (myRequest)
    .then (response => response.json())
    .then (myJSON => {
        console.log(myJSON);
        console.log(myJSON.info.version);
        console.log(myJSON.results[0].name.last);
    })
    .catch (console.log("ERROR: " + error))

    //with async / await
    async function optainAPI () {
        try{
            let response = await fetch(myRequest);
            let myJSON = await response.json();
            console.log(myJSON);
            console.log(myJSON.info.version);
            console.log(myJSON.results[0].name.last);
        }
        catch (error) {
            console.log("ERROR: " + error);
        }
    }

    

}
