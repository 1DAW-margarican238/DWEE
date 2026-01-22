"use strict"
{
    let url ="https://jsonplaceholder.typicode.com/todos/10";
    let myRequest = new Request(url);
    fetch(myRequest,{
        method: "DELETE",
    })
    .then(response=>response.json())
    .then (console.log);

    let url2 = "https://jsonplaceholder.typicode.com/todos/11";
    let myRequest2 = new Request(url2);
    fetch(myRequest2,{
        method: "PATCH",
        body: {
            title:"Nuevo titulo"
        }
    })
    .then(response=>response.json())
    .then (console.log);

    let url3 = "https://jsonplaceholder.typicode.com/todos/12";
    let myRequest3 = new Request(url3);
    fetch(myRequest3,{
        method: "PUT",
        body: {
            title:"Nuevo put"
        }
    })
    .then(response=>response.json())
    .then (console.log);





}