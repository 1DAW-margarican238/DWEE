"use strict"
{
/**
     * 2 objetos: 
     *  - 1) localStorage: la información se mantiene de forma indefinida hasta que la elimine
     *  - 2) sessionStorage: se pierde cuando se cierra ventana del navegador
     * 4 métodos:
     *  - 1) localStorage.setItem ("variable", "valor")
     *  - 2) localStorage.getItem ("variable")
     *  - 3) localStorage.removeItem("variable")
     *  - 4) localStorage.clear() : borra todas las localStorage
      
    */
    
    
    
    // EJEMPLO 1:
    console.log("Ejemplo1:");
    localStorage.setItem("nombre", "Jacinta");
    console.log(localStorage.getItem("nombre"));

    localStorage.setItem("nombre", "Felipe"); //  se pierde el valor anterior.
    console.log(localStorage.getItem("nombre"));

    // EJEMPLO 2:
    console.log("\nEjemplo2:");
    localStorage.setItem("apellidos", "de Borbón");
    console.log(localStorage.getItem("apellidos"));

    // EJEMPLO 3:
    console.log("\nEjemplo3:");
    localStorage.removeItem("apellidos");
    //localStorage.clear(); //  se borran todos los localStorage    



}