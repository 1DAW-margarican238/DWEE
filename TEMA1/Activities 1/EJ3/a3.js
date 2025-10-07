"use strict"
{


let horas = parseInt(prompt("Introduce las horas (0-23):"));
let  minutos = parseInt(prompt("Introduce los minutos (0-59):"));
let  segundos = parseInt(prompt("Introduce los segundos (0-59):"));

console.log("Tu hora es: " + horas + ":" + minutos + ":" + segundos);



segundos++;

if (segundos === 60) {
  segundos = 0;
  minutos++;
}
if (minutos === 60) {
  minutos = 0;
  horas++;
}
if (horas ===24){
    horas = 0;
}

console.log("La hora es: " + horas + ":" + minutos + ":" + segundos);

}