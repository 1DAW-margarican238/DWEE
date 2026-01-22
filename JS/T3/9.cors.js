"use strict"
{
    // const imgURL="https://iesmartinezm.es/wp-content/uploads/2023/11/20231129_200825-768x1024.jpg";
    const imgURL="https://desguacescorpas.com/wp-content/uploads/oKJFo8ipjIEA1vP6AjBJyAVBJdeWXkdkoRnb3NYeH1VGBjQGKZbDJQ.jpg";

    let btn = document.querySelector("#btn");
    const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';

    btn.addEventListener("click", () => {
        let mtRequest = new Request(corsAnywhere + imgURL);
        fetch (myRequest, {
            method: "GET",
            headers: new Headers({  
                "Access-Control-Allow_Origin": "*",
                "Content-Type": "application/image"
            })
        })
        .then (response => {
            console.log(response.status); // código numérico
            console.log(response.statusText); // OK NoOK
            console.log(response.ok); // true o false
            if (response.ok) {
                return response.blob();  
            }else{
                throw new Error ("Error accediendo a la URL");
            }
        })
        .then(myBlob => {
            let img = document.createElement("img");
            img.src = URL.createObjectURL(myBlob);
            document.body.append(img);
        })
        .catch(error => {
            console.log("ERROR: " + error)
        })
    })

}