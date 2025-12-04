"use strict"
{
    /**
     * LOS NODOS REALMENTE NO SE ELIMINAN, SINO QUE SE DESCONECTAN DEL DOM
     * A partir de la página 20.
     * remove ()
     * removeChild (nodoHijo)
     * replaceChild(nodoNuevo,nodoAntiguo)
     */


    let myDiv = document.querySelector("#idDiv2");
    console.log(myDiv);

    console.log(myDiv.isConnected);
    myDiv.remove();
    console.log(myDiv.isConnected);
    let myNewDiv = myDiv.removeChild();
    myDiv.replaceChild(p1,p2)
}