"use strict"
{
    //. Programa una función para saber la edad de una persona, sabiendo la fecha de nacimiento.

function myFunction(dayB, monthB,yearB){
    let thisDay = 16;
    let thisMonth = 10;
    let thisYear = 2025;

    let age = thisYear - yearB;

    if (thisMonth < monthB){
        age = age - 1;
    }

    if (thisMonth == monthB && thisDay < dayB){
        age = age - 1;
    }

    return age;
}

console.log("Age: " + myFunction(20, 12, 2000))

//hacer con Date !!!!!

}