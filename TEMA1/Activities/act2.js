"use strict"
{
    // funcion que de un string devuelve un array de todos los numeros presentes en el string

    
    
    
    const Fflecha = (cad) =>{
    const regExp = /[0-9]/gi;
    return  console.log(cad.match(regExp));
    }

    let cad = 'str56jk8';
    Fflecha(cad);
    let cad2 = 'prueba 19 prueba 2';
    Fflecha(cad2);

  


}