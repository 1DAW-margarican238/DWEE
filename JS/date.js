"use strict"
{

// OBJETO DE TIPO FECHA
let fecha = new Date();
console.log(fecha);

//fecha introduciendo la fehca que nosotros queramos.
let fecha2 = new Date("1979/5/30 14:30:15");
console.log(fecha2);

//otra forma de crear la fecha, pero los meses ahora cuentan desde el 0(enero)/11(diciembre)
let fecha3 = new Date(1979, 4, 30, 12, 30, 15);
console.log(fecha3);

//fecha solo con dias, la hora sale a 0
let fecha4 = new Date(1979, 4, 30);
console.log(fecha4);

//fecha solo con dias, la hora sale a 0
let fecha5 = new Date("1979/05/30");
console.log(fecha5);

//si ponemos a mes y dia a 0, se va al dia anterior de la última fecha


console.log("\n\tGET METHODS");
//GET Methods
let date = new Date("2025/10/27 15:30:10.999");
console.log(date);


console.log(date.getDay()); // 1 -> (0=SUNDAY,1=MONDAY)
console.log(date.getDate()); // dia -> 27
console.log(date.getMonth()); // mes -> 9 -> emppieza desde 0
console.log(date.getFullYear()); //año -> 2025
console.log(date.getYear()); // 195 -> empieza desde 1900
console.log(date.getHours()); // hora -> 15
console.log(date.getMinutes()); // minutos -> 30
console.log(date.getSeconds()); // segundos -> 10
console.log(date.getMilliseconds()); // milisegundos -> 999
console.log(date.getTimezoneOffset()); // diferencia en minnutos entre el tiempo UTC y el nuestro -> 0  - 1H -> -60 (Estamos en el GTC+1)
console.log(date.getTime()); // milisegudnos desde el 1 Enero de 1970


console.log("\n\tSET METHODS");
//SET Methods

date.setMonth(4);
date.setDate(30); //day
date.setFullYear(1979);
date.setHours(14); // setHours (HH,MIN,SEG);
date.setMinutes(30);
date.setSeconds(15);
console.log(date);

let d1 = date.toDateString(); //fecha en String (sin hora) formato escrito
console.log(d1);
// alert(d1);

let d2 = date.toLocaleDateString(); //fecha en String (sin hora), formato Local de nuestro ordenador
console.log(d2);
// alert(d2);

console.log(date.toUTCString()); //diferencia ???
console.log(date.toGMTString()); //diferencia ???


}