"use strict"
{

    /**
     * PROPIEDADES PARA REEMPLAZAR O CREAR (INSERTAR) COSAS, TEXTOS O ELEMENTOS PEQUEÑOA
     * textContent --> texto sin formato
     * innerHTML --> texto con formato (cursiva, negrita, etc)
     * outerHTML --> texto con formato + etiqueta HTML
     */

    let myDiv1 = document.getElementById("idDiv1");
    console.log(myDiv1);
    myDiv1.textContent = "Contenido del Div sin formato";
    // para escribir mas cosas sin sobreescribit
    myDiv1.textContent += " hola caracola";
    myDiv1.style.setProperty("background-color", "lightcoral");

    let myDiv2 = document.getElementsByClassName("cDiv2")[0];
    console.log(myDiv2);

    myDiv2.textContent = "Hola a toda y a todos";// ya no esta en negrita
    myDiv2.textContent = "Hola a <strong>toda</strong>y a todos"; //se escribe lo de <strong> pq esta sin formato, es como si fuese texto

    myDiv2.innerHTML =  "Hola a <strong>toda</strong> y a todos"; // ahora si sale en negrita, pq es con formato.

    myDiv2.innerHTML += ", buenas <i> tardes </i>"; // lo pone en italica

    console.log(myDiv2.outerHTML); //la etiqueta div + todo lo que hay dentro
    
    /**
     * append -> añadir hijo (node o string) + no devuelve nada
     * appendChild -> añadir hijo (solo node) + te devuelve el nodo ensertado
     */

    const img = document.createElement("img");
    img.src = "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg";
    img.style.setProperty("width", "40px");
    img.alt ="logo JS";

    //insertar la imagen
   let i =  document.body.appendChild(img);
   console.log(i);

   const myDiv3 = document.createElement("div"); // Me invento miDiv3 para luego colocar miDiv4 alrededor de miDiv3 (más abajo)
    myDiv3.textContent = "Esto es mi Div3 insertado con javascript";
    myDiv3.setAttribute("id", "idDiv3");
    console.log(myDiv3);
    document.body.append(myDiv3);
    

        /**
     *      insertAdjacent: 3 versiones:
     * insertAdjacentElement (insertPosition, HTMLElement) : para insertar un Element
     * insertAdjacentHTML(insertPosition, string) : para insertar código HTML (similar a innerHTML)
     * insertAdjacentText (inserPosition, string) : para insertar texto (similar a textContent)
     * 
     * llevan 2 parámetros:
     * parámetro1: posición donde va insertado el contenido.
     *  beforebegin: el contenido se inserta ANTES de la etiqueta HTML de apertura
     *  afterbegin: el contenido se inserta DENTRO de la etiqueta HTML, antes de su primer hijo
     *  beforeend: el contenido se inserta DENTRO de la etiqueta HTML, después de su último hijo (=appendChild())
     *  afterend: el contenido se inserta DESPUÉS de la etiqueta HTML de cierre
     * parámetro2: el contenido que se inserta
     */



            //ejemplo: p1.inisertAdjacentElement("afterend",p2);
    /**
     * <!-- beforebegin -->
     *  <p>
     *      <!-- afterbegin -->
     *      text
     *      <!-- beforeend -->
     *  </p>
     * <!-- afterend -->
     */


    let myDiv4 = document.createElement("div");
    myDiv4.setAttribute("id","idDiv4");
    myDiv4.textContent = "Contenido de miDiv4";

    myDiv3.setAttribute("style", "background-color: orange");
    //myDiv3.style.backgroundColor = "orange";
    //myDiv3.style.setProperty("background-color","orange");

    //seleccionar myDiv3 para insertar miDiv4 en distintas posiciones
    // myDiv3.insertAdjacentElement("beforebegin", myDiv4);
    // myDiv3.insertAdjacentElement("afterbegin", myDiv4);
    // myDiv3.insertAdjacentElement("beforeend", myDiv4);
    // myDiv3.insertAdjacentElement("afterend", myDiv4);
    myDiv3.appendChild(myDiv4); // se inserta justo detas, no hay mas opciones

    myDiv3.insertAdjacentHTML("afterbegin", "<h1>Hola</h1>"); //pinta con el formato
    myDiv3.insertAdjacentText("beforeend", "<h1>Hola</h1>"); //pinta el string tal cual //deberia poner solo Hola







}