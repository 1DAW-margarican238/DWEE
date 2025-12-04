"use strict"
{

console.log(window.document);
console.log(document); // igual que el anterior

console.log(document.documentElement); //elemento raiz del documento html

console.log(document.head);
console.log(document.body);
console.log(document.doctype); //tipo de documento que abre el navegador
console.log(document.characterSet); //UTF-8
console.log(document.title);
console.log(document.links); //HTMLCollection // contiene los <a href>
console.log(document.images); //HTMLCollection
console.log(document.forms); //HTMLCollection
console.log(document.styleSheets);
console.log(document.scripts); //HTMLCollection


let a = document.links;
//parar recorrer el htmlcollection
for (let elem of a){
    console.log(elem);
}



/**
     * - Clase HTMLElement: contiene objetos que son elementos de html: body, párrafo, div, ...
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement
     * 
     * - HTMLCollection: es una interfaz que se implementa mediante una clase que es un "array" que contiene elementos html en orden de aparición.
     * En resumen: un casi un array de HTMLElements ,pero no tienen: forEach, map ni reduce.
     * Un HTMLCollection se actualiza de forma automática en cuanto se crea o se elimina un nuevo elemento html en la página.
     * 
     * - Clase Node: es algo más genérico que Element ya que también puede ser un texto o un comentario.
     * https://developer.mozilla.org/en-US/docs/Web/API/Node
     * - NodeList: es casi un array de Node. Trae forEach.
     * 
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection
     * https://lasfi.to/blog/diferencias-entre-node-y-element/
     * 
     */


}