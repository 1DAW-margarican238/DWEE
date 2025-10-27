"use strict"
{

function myFunction(date){
    let year1 = new Date();
    let year2 = date.getFullYear();
    return year1.getFullYear() - year2;
}

console.log(myFunction(2024,10,10));

// does not work: 
// date.getFullYear is not a function at myFunction
}