"use strict"
{
//crear un comentario
    let c = document.createComment("This' our comment");
    c.isConnected?console.log("It's connected"): console.log("It's not connected"); // para ver si está o no conectad
    
    document.body.append(c); //para insertar  // no va???

    let t = document.createTextNode("My text has just been created"); // para crear un texxto
    t.isConnected?console.log("It's connected"): console.log("It's not connected");
    document.body.append(t); //insertar


    let myP = document.querySelector("p");
    myP.textContent = t.textContent; //modificado el antiguo p

    // si ponemos el parametro true clona absolutamente todo (por ejemplo un p con un p dentro, si no ponemos true no clona los hijos, si lo ponemos si lo clona)
    let t2 = t.cloneNode(); // clonar un nodo
    t2.textContent= "My second text";
    document.body.append("br"); //asi no
    document.body.append(t2); // asi si


    //crear elementos
    let newDiv = document.createElement("div"); //HTMLElement
    newDiv.textContent="Hola";
    let newDiv2 = newDiv; //copia por referencia, ahora ambas tienen 'adios'
    newDiv2.textContent = "adios";
    console.log(newDiv);
    console.log(newDiv2); 



    let newImg = document.createElement("img"); //imagen
    let newH1 = document.createElement("h1"); //h1
    
    
    let newH2 = document.createElement("h2"); //h2
    let newTextH2 = document.createTextNode("H2 text");
    newH2.append(newTextH2);
    console.log(newH2);
    document.body.append(newH2); // insertado al html
    newH2.textContent ="New H2 text"; // el newh2 se machaca y aparece este
    let br = document.createElement("br");
    newH2.append(br);
    newH2.append("Me presento: soy ");
    newH2.append(document.createTextNode("General y Coronel")); // no lo machaca, lo añade justo al lado ( o debajo, ya que hemos hecho un br);

    newH2.append(newH1);
    newH1.append("h1 text");

    let a = newH2.appendChild(newTextH2); // solo node, no strings
    console.log(a);


/**
     * https://developer.mozilla.org/en-US/docs/Web/API/Element/append
     * append vs appendChild:
     * 1) append inserta un Node o un String (uno o varios a la vez, dados en un array)
     * 1) appendChild solo inserta Node (1 a la vez)
     * 2) append no devuelve nada
     * 2) y appendChild devuelve el Node insertado
     */


/**
     * Node es la clase base para todos los objetos del documento, 
     * y HTMLElement hereda de Node para representar elementos HTML específicos. 
     * Esto significa que cada elemento HTML es un Node, pero no todos los Node 
     * son elementos HTML; un Node también puede ser un texto o un comentario. 
     * Esta relación permite que todos los elementos HTML hereden la funcionalidad 
     * de Node
     */






}