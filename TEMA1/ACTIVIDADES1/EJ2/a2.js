"use strict"

{
    // let a =0;
    // // let a = 4;
    // // let a = 3;
    // let b =3;
    // if(a<b){
    //     console.log(b + " es mayor que " +a);
    // }else if (a>b){
    //     console.log(a + " es mayor que " + b);
    // }else{
    //     console.log(a + " es igual que " +b);
    // }


    // let num = prompt("Introduzca un numero")
    // let num1 = parseInt(num);
    // console.log(num1);

    // num = prompt("Introduzca otro numero");
    // let num2 = parseInt(num);
    // console.log(num2);




//   do{
//         let num = prompt ("Introduzca un numero");
//   }
    // while(isNaN||num<=0){
    //     do{
    //         let num = prompt("Introduzca un numero");

    //     }
    // }


    // if (typeof(num1)!=typeof(4) || typeof(num2)!=typeof(4) || num1<=0 ||num2<=0){
    //     do(num =prompt("Introduzca otro numero")){
    //         while(typeof(num1)!=typeof(4) || typeof(num2)!=typeof(4) || num1<=0 ||num2<=0){

    //         }
    //     }
    // }

    
let num1, num2;

do {
  num1 = parseInt(prompt("Introduce el primer número (mayor que 0):"));
  num2 = parseInt(prompt("Introduce el segundo número (mayor que 0):"));
} while (isNaN(num1) || isNaN(num2) || num1 <= 0 || num2 <= 0);

if (num1 > num2) {
  console.log(num1 + " es mayor que " + num2);
} else if (num1 < num2) {
  console.log(num1 + " es menor que " + num2);
} else {
  console.log("Ambos números son iguales");
}




}