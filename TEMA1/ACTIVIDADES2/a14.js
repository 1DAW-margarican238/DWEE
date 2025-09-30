"use strict"
{

    let precio = parseInt(prompt("Introduce el precio inciial: "));
    let descuento = parseInt(prompt("Introduce el descuento: "));

    function miFuncion(precio, descuento){
        let  descuentof = descuento/100;
    let pf = (precio - (descuentof*1000));
    return pf;
    }
    
    console.log("El precio final con el descuento es de: " + miFuncion(precio, descuento));



}