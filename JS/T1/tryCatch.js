"use strict"
{
    try {
        let a=5, b=0;
        let c =a/b;
        console.log("El resultado es " + c)

        const v = [1,2,3];
        v=[1,2,3,4];
    }catch(error){
        console.log("Ha habito problemas: " + error);
    }finally{
        console.log("Siempre, haya habido algun error o no");
    }




  

    try{

    let numero;
    numero = prompt("Introduce a number:", "solo numeros");
        if (isNaN(numero)||numero==null||numero===""){
            throw new Error ("no has introducido un número");
        }
        numero++;
        console.log(numero);
    }catch(err){
        console.log("La próxima vez, escribe un número");
        console.log(err);
    }finally{

    }




}