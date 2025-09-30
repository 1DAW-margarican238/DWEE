"use strict"

{

let num1 = parseInt(prompt("Introduce un número positivo"));
let num2 = parseInt(prompt("Introduce otro número positivo"));

if (num1 < num2) {
  if ((num2 - num1) === 1) {
    console.log("Los números son consecutivos");
  } else {
    for (let i = num1 + 1; i < num2; i++) {
      console.log(i);
    }
  }
} else if (num1 > num2) {
  if ((num1 - num2) === 1) {
    console.log("Los números son consecutivos");
  } else {
    for (let i = num2 + 1; i < num1; i++) {
      console.log(i);
    }
  }
} else {
  console.log("Los números son iguales");
}
}
