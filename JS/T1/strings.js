"use strict"
{
    let myString ="Hola, ¿que tal¿";
    let myString2 = new  String("user:password:group:home:shell");
    //ambas funcionan igual

    //numero de caracteres de una string
    console.log(myString.length);

    //pasar a minuscula o mayus la cadena
    console.log(myString.toLowerCase());
    console.log(myString.toUpperCase());

    //concatenar strings
    console.log(myString.concat(myString2)); // no guarda la concatenacion
    console.log(myString); //no se ha guardado

    //el caracter en una posicion específica
    console.log(myString.charAt(0));

    //ultimo caracter
    console.log(myString.charAt(myString.length-1));

    // la posición de un caracter
    console.log(myString.indexOf("¿")); // 6

    //decir desde que posicion buscar // si hay dos carcteres iguales da solo el primero que encuentra
    console.log(myString.indexOf("¿", 10)); //-1 es no encontrar nada //14

    //la ultima ocurrencia del caracter que estamos buscando
    console.log(myString.lastIndexOf("¿")); //14

    // 2º parametro => posicion desde la izq desde donde se empieza a buscar hacia atrás
    console.log(myString.lastIndexOf("¿",10)); //6

    // reemplaza un caracter por otro, pero solo el primero que encuentra
    console.log(myString.replace("¿", "¡"));

    // reemplaz un caracter por todos los otros
    console.log(myString.replaceAll("¿", "¡"));

    //split se usa para crearte un array a partir de un string cortándolo
    // para guardarlo habria que asignarlo a un array
    let myArray = myString2.split(":");
    console.table(myArray, myArray.length);
    // console.table(myString2.split(":"));

    // dede donde, cuantos carácteres
    console.log(myString.substring(0,10));

    // sacar el tercer elemento de la cadena // no sale, no esta bien, tendría q salir "group"
    console.log(myString2.substring((myString2.substring(myString2.indexOf(":")+1)).indexOf(":")));

    let myString3 = "Juan Pedro Bernal Márquez";
    console.log(myString3.split(" ")[2]);

    // para ver si la string tiene ese caracter o no
    console.log(myString2.includes(":")?"si":"no");
    console.log(myString2.includes("grupo")?"si":"no");

    // repetir la string tantas veces como pongamos
    console.log(myString2.repeat(3));

    // quitar posibles espacios SOLO de la derecha e izq del string
    let myString4 = "             HO LA        ";
    console.log(myString4.trim());
}