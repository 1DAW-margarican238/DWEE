"use strict"
export const magicNumber = 70;
export const greet = () => alert("Hello");

const flag = true;
let rootSquare = function (n){
    return Math.sqrt(n);
}

export {
    rootSquare as raizCuadrada,
    flag as bandera
};

// export {
//     rootSquare as raizCuadrada
// };