"use strict"
{

    //enlaces:
    // https://www.w3schools.com/cssref/index.php
    // bootstrap....


    
    let newDiv  = document.createElement("div");
    newDiv.id = "id1"; // añadir un id al elemento
    newDiv.style = "color:red"; // añadir estilo al elemento
    newDiv.className = "cDiv1"; // añadir una clase al elemento
    newDiv.className = "cDiv2"; // se queda la última clase
    newDiv.classList.add("cDiv3"); // ahora hay dos clases
    console.log(newDiv);
    document.body.append(newDiv);


    

// Atributos de un elemento HTML
    /**
     * setAttribute (String attr, valor) : añade o cambiar el valor del atributo
     * boolean hasAttribute (String attr) : Indica si el Element tiene el atributo sttr
     * boolean hasAttributes () : indica si el Element tiene atributos HTML o no
     * Array getAttributeNames () : devuelve un array de String con los atributos del Element
     * String getAttribute (String attr)
     * removeAttribute (String attr)
     * 
     * Node getAttributeNode (String attr) : igual que getAttribute pero devuelve el Node
     * Node removeAttributeNode (String attr) : igual que removeAttribute pero devuelve el Node borrado
     * Node setAttributeNode (String attr, valor) : igual que setAttribute pero devuelve el Node al que le acabas de insertar el atributo
     * 
     */

    let newP =  document.createElement("P");

    newP.setAttribute("name" , "nDiv1");
    newP.setAttribute("id", "idParrafo1");
    newP.setAttribute("class", "cParrafo1");
    newP.setAttribute("kk", "peste");
    console.log(newP);
    console.log(newP.hasAttribute("name")); //true
    console.log(newP.hasAttribute("skill")); //false
    console.log(newP.getAttributeNames());
    newP.setAttribute("style", "color: orange");
    console.log(newP.getAttributeNames());
    newP.removeAttribute("style");
    console.log(newP.getAttributeNames());

    let attr1 = newP.getAttribute("id");
    console.log(attr1); // idparrafo1
    let attr2 = newP.getAttributeNode("id");
    console.log(attr2); // id ="idparrafo1"

    newP.appendChild(document.createTextNode("texto of P"));
    newDiv.appendChild(newP);

    console.log(newDiv.isConnected); //true
    console.log(newP.isConnected); //true


    
    let myA = document.querySelector(".enlace");
    console.log(myA.getAttribute("data-id"));
    myA.setAttribute("data-description", "DOM");

    //style
    console.log(myA);
    console.log(myA.style.color);
    console.log(myA.style.backgroundColor);
    console.log(window.getComputedStyle(myA));

    myA.style.backgroundColor = "orange";
    myA.style.setProperty("background-color","green"); //otra forma de poner un atributo

    myA.style.textDecoration = "line-through"; //overline, underline, none...
    myA.style.setProperty("text-Decoration", "none"); //se pone la última -> none


    //data set -> todos los atributos inventados -> los que tienen data por delante
    console.log(myA.dataset);
    console.log(myA.dataset.id);
    console.log(myA.dataset.description);

    //classList -> add, remove, toggle, item(pos), contains, replace
    let myH3 = document.querySelector(".cHache3");
    console.log(myH3);

    //add sirve para añadir clases
    myH3.classList.add("cUno");
    myH3.classList.add("cDos");
    console.log(myH3.classList);

    //remove
    myH3.classList.remove("cImportante");
    console.log(myH3.classList);

    //toggle
    myH3.classList.toggle("cInfo");
    console.log(myH3.classList); //si no existe la clase la añade, si existe la quita
    myH3.classList.toggle("cInfo");
    console.log(myH3.classList); //ya no está, lo ha quitado

    //item
    console.log(myH3.classList.item(0)); //el item en posicon 0
    console.log(myH3.classList.item(2)); //el item en posicon 2

    //contains
    console.log(myH3.classList.contains("cImportante")); //false, no existe
    console.log(myH3.classList.contains("cUno")); //true, si existe

    //replace
    myH3.classList.replace("cUno", "cTres");
    console.log(myH3.classList); //donde estaba cUno ahora está cTres

}