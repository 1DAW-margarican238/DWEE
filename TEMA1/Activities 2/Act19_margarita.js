"use strict"
{
    
    
    function myFunction(myString, char){
        let myArray = myString.split(char);
        return myArray;
    }


    let a = myFunction("hola que tal"," ");
    console.log(a);

}