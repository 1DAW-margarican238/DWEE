"use strict"
{

    //Comprueba que una cadena empieza con las letras “m” o “d” y además termina con las letras “a” o “o”. Realiza el ejercicio con funciones de cadena y con expresiones regulares.

    //funcion string
    function comprobarString(cad){
        if ((cad.charAt(0) == 'm' || cad.charAt(0) == 'd') && (cad.charAt(cad.length-1) == 'a' || cad.charAt(cad.length-1)== 'o')){
            return true;
        }else{
            return false;
        } 
        

    };
    
    let cad = 'polo';
    console.log("----Comprobar con String----")
    console.log(comprobarString(cad));
   
    //funcion regular

    function comprobarRegExp(cad){
        const regExp = /^[m|d].*[a|o]$/;
        return regExp.test(cad);
    };

    console.log("----Comprobar con RegExp----")
    console.log(comprobarRegExp(cad));

}