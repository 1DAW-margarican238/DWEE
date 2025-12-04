"use strict"
{
// Realiza un programa que mediante eventos y el uso del objeto event, te muestre en todo momento la posición actual del ratón en pantalla. Para mostrarlo modificaremos de forma dinámica un elemento HTML (Ejemplo, un <p>) que nos muestre la posición actual del ratón.
let p = document.createElement("p");
document.body.appendChild(p );

document.addEventListener("mousemove",function(evento){
p.innerHTML = "Our mouse position in our html  <br>"
p .innerHTML += "X=" + evento.x + " ; Y=" + evento.y;
p.innerHTML+= "<br>Our mouse position in our whole screen "
p .innerHTML += "<br>"+"X=" + evento.screenX + " ; Y=" + evento.screenY;

});



}