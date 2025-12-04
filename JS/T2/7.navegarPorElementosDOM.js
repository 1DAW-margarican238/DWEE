"use strict"
{
    /**
     * MÉTODOS PARA NAVEGAR POR ELEMENTOS
     * children : devuelve un array de HTMLCollection con los elementos hijo del elemento en cuestión
     * parentElement : devuelve el elemento padre o null si no tiene 
     * firstElementChild = children[0] = devuelve el primer hijo
     * lastElementChild = children[ultimo]  = children[children.length-1] = devuelve el último hijo
     * previousElementSibling : devuelve el elemento hermano previo (null si no tiene)
     * nextElementSibling : devuelve el siguiente elemento hermano (null si no tiene)
     *  
     */

    /**
     <div id="idApp" style="background-color: lightgrey;">
        <div class="cHeader">
          <h1>Titular</h1> 
        </div>
        hermano anterior
        <p>Párrafo que tiene hermanos</p>
        hermano posterior
        <a href="/">Enlace</a>
    </div>
     */


    console.log(document.body.children); // HTMLCollection con todos los hijos del body
    console.log(document.body.children.length);
    
    for (let element of document.body.children){
        console.log(element);
    } // recorrer el HTMLCollection

    console.log(document.body.parentElement); //el padre de body es html

    let listaAviones = document.querySelector("#idAviones");
    let padreAviones = listaAviones.parentElement;
    console.log(padreAviones); // el padre de la lista de aviones es body
    
    console.log(document.body.firstElementChild); //el primer hijo de body es el enlace
    console.log(document.body.firstElementChild.textContent); //el texto solo
     //mismo resultado de distinta forma
    console.log(document.body.firstElementChild.firstChild);
    console.log(document.body.children[0]);


    console.log(document.body.lastElementChild);
    console.log(document.body.children[document.body.children.length-1]); //ambos dan lo mismo

    //heramno anterior del body //head
    console.log(document.body.previousElementSibling);
    //hermano siguiente del body, no hay, null
    console.log(document.body.nextElementSibling);


    /**
     * PARA NAVEGAR POR LOS NODOS
     * //para recorrer cosas mas concretas
     * childNodes : devuelve un array de NodeList con los nodos hijos del elemento en cuestión
     * parentElement : devuelve el nodo padre o null si no tiene 
     * firstChild : devuelve el primer nodo hijo
     * lastChild : devuelve el último nodo hijo
     * previousSibling : devuelve el anterior nodo hermano
     * nextSibling : devuelve el siguiente nodo hermano
     */

    console.log(document.body.childNodes); //todos los nodos hijos de body
    console.log(document.body.childNodes.length);

    //diferencia entre Children y ChildNodes, childNodes se puede recorrer con un foreach o forof
    document.body.childNodes.forEach(element => {
        console.log(element);
    });
    
    //nodo padre de body
    console.log(document.body.parentNode); //html

   let listaCiclos = document.querySelector("#idCiclomotores");
    let padreCiclos = listaCiclos.parentNode;
    console.log(padreCiclos); // el nodo padre de la lista de ciclomotores es body

    console.log(document.body.childNodes[1]); //el segundo [1] hijo nodo de body

    console.log(document.body.lastChild); //ultimo hijo
    console.log(document.body.childNodes[document.body.childNodes.length-1]);  //last child a traves de child nodes

    //primer nodo hijo de la lista de aviones
    console.log(document.body.childNodes[5].firstChild);
    console.log(document.body.childNodes[5].lastChild); //es el mismo 

    /**
     * nodo hermano anterior de el p:
     * <div id="idApp" style="background-color: lightgrey;">
        <div class="cHeader">
          <h1>Titular</h1> 
        </div>
        hermano anterior
        <p>Párrafo que tiene hermanos</p>
        hermano posterior
        <a href="/">Enlace</a>
    </div>
     */

    let myDiv = document.querySelector('#idApp');
    let myPmyDiv= myDiv.querySelector('p');
    console.log(myPmyDiv.previousSibling);
    console.log(myPmyDiv.nextSibling);
    console.log(myPmyDiv.previousElementSibling);
    console.log(myPmyDiv.nextElementSibling);











}