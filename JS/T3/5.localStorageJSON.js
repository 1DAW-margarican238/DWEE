"use strict"
{
    let myArray = ["Gato","Jirafa","Rinoceronte"];
    console.log(myArray);
    localStorage.setItem("array",JSON.stringify(myArray));
    let myNewArray = JSON.parse(localStorage.getItem("array"));
    console.log(myNewArray);
    console.log(myNewArray.length);
    console.log(typeof myNewArray);
}