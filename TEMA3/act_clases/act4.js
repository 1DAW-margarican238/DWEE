"use strict"
{

    let url = "http://localhost:3000/members";
    let myRequest = new Request(url);

    boton1.addEventListener("click", function (evento) {
    fetch(myRequest, {
        method: "POST",
        body: JSON.stringify({
        userId: 1,
        id: "3",
        title: "TITULO 3",
        completed: false
        })
    })
    .then(response => response.json())
    .then(console.log)
    });

    //PUT
    let url2 = "http://localhost:3000/members/3";
    let myRequest2 = new Request(url2);
    fetch(myRequest2, {
        method: "PUT",
        body: JSON.stringify({
        userId: 1,
        id: "2",
        title: "Nuevo put",
        completed: true
        })
    })
    .then(response => response.json())
    .then(console.log);

  //PATCH
    let url3 = "http://localhost:3000/members/3";
    let myRequest3 = new Request(url3);
    fetch(myRequest3, {
    method: "PATCH",
    body: JSON.stringify({
        title: "Nuevo titulo"
    })
    })
    .then(response => response.json())
    .then(console.log);


  //DELETE
    let url4 = "http://localhost:3000/members/3";
    let myRequest4 = new Request(url4);
    fetch(myRequest4, {
    method: "DELETE",
    })
    .then(response => response.json())
    .then(console.log);

    



}