"use strict"
{

function myFunction(date){
    let year1 = new Date();
    let year2 = new Date(input);
    return (year1.getFullYear() - year2.getFullYear());
}

console.log(myFunction(2024,10,10));

// does not work: 
// date.getFullYear is not a function at myFunction

}