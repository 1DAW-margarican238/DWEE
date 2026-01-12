"use strict"
{
    //llamar a una funcion dentro de otra
    //callback 

   let myCallBack = () => alert ("Hello World");
   setTimeout(myCallBack, 2000);
  

   let myArray = ["Perro","Gato","Elefante"];
   let f = function(){
    for (let a of myArray) {
        console.log(a);
    }
    for (let i =0;i<5000;i++) {
        console.log("-");
    }
   }

   function modifyArray(array,callback){
    array.push("Jirafa");
    callback();
    array.push("Cebra");
   }

   modifyArray(myArray, f); //el timeout se hace 'por otro lado' por  lo que se hacen ambos a la vez, no se espera a que se haga uno y después se hace el otro
   

}