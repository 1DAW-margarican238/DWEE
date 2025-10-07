"use strict"
{
    function miFuncion(){
    let n =5;
    
    for (let i= 0; i<n;i++){
         let l = " ";
        for(let j =(n-i);j>0;j--){
           l += "x";
        }
        console.log(l);
    }
    
    }
   
    miFuncion();



}