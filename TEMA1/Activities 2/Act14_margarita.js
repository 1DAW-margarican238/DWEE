"use strict"
{

    let precio = parseInt(prompt("Introduce the initial price: "));
    let descuento = parseInt(prompt("Introduce the discount: "));

    function miFuncion(precio, descuento){
        let  descuentof = descuento/100;
    let pf = (precio - (descuentof*1000));
    return pf;
    }
    
    console.log("The final price with the discount is: " + miFuncion(precio, descuento));



}