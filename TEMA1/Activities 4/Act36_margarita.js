"use strict"
{
//Programa una función que dado un array devuelva el número más alto y el más bajo de dicho array, p.e. miFuncion([1,5,34,99,-2]) devolverá [99,-60]
let max = 0;
let min =0;
function myfunction(array){
    array.forEach(num =>{
        if(num>max){
            max =num;
        }
        if(num<min){
            min=num;
        }
    });
    return("num max: " + max + ", num min: " + min)
}
let myArray = [1,5,34,99, -2];
console.log(myfunction(myArray));

}