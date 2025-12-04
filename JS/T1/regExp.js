"use strict"
{

/*
g — Global: busca todas las coincidencias (no solo la primera)
i — Ignore case: ignora mayúsculas y minúsculas
m — Multiline: ^ y $ funcionan por línea, no solo por texto completo
u — Unicode: soporte completo para caracteres Unicode (emojis, símbolos)
y — Sticky: busca exactamente desde la posición actual (sin saltos)
*/

// $ al final para que termine por ese caracter


const r1 =/.a.o/gimuy;
const r2 = new RegExp("a.o","i");
// const r3 = new RegExp(/.a.o/,i);
let r4 = new RegExp(/.a.o/,"i");

console.log(r1.source) //.a.o
console.log(r1.flags); //gimuy
r1.flags.includes("g"?console.log("yes g"):console.log("no g"));
r1.global?console.log("yes g"):console.log("no g");

r1.flags.includes("i"?console.log("yes i"):console.log("no i"));
r1.ignoreCase?console.log("yes i"):console.log("no i");

r1.flags.includes("m"?console.log("yes m"):console.log("no m"));
r1.multiline?console.log("yes m"):console.log("no m");

r1.flags.includes("u"?console.log("yes u"):console.log("no u"));
r1.unicode?console.log("yes u"):console.log("no u");

r1.flags.includes("y"?console.log("yes y"):console.log("no y"));
r1.sticky?console.log("yes y"):console.log("no y");



/*
boolean regExp.test (string);
[] regExp.exec (string);
[] str.match (regExp);
*/

r4 = new RegExp(/.a.o/,"i");
r4.test("GATO");
r4.test("pAto");
r4.test("Perro");




console.log("------------m-----------")
const regExp1 = new RegExp("^football");
const regExp2 = new RegExp("^football","m");

console.log(regExp1.test("rugby\nfootaball"));
console.log(regExp2.test("rugby\nfootaball"));
console.log(regExp2.test("rugby\nkkfootaball"));
console.log(regExp2.test("footBall\ntenis"));


console.log("----------u----------") // para caracteres raros

r4 =/./; //un caracter
console.log(r4.test("XX")); //true
console.log(r4.test("")); //false
console.log(r4.test("x")); //true



console.log("-------y-------");
const regExp3 = new RegExp("a","y");
regExp3.lastIndex=0; // default
console.log(regExp3.test("ba")); // false
regExp3.lastIndex=1;
console.log(regExp3.test("ba")); // true
regExp3.lastIndex=2;
console.log(regExp3.test("ba")); // false

const regExp4 = /foo/y;
let myStr1 = "table footballfootbolin";
regExp4.lastIndex= 6;
console.log(regExp4.test(myStr1)); // true
console.log(regExp4.lastIndex); // 9
console.log(regExp4.test(myStr1)); // false
console.log(regExp4.lastIndex); // 0 // no lo encuentra y vuelve al principio
console.log(regExp4.test(myStr1)); // false



console.log("---- SPECIAL CHARACTERS ----"); // that we can find in regExp
/*
. -> CUALQUIER CARACTER
 \ -> ESCAPA CARACTERES ESPECIALES
 \n -> SALTO DE LINEA (linea siguiente  caracter 0)
 \t -> TABULADOR
 \r -> SALTO DE CARRO
 \f -> FIN DE FORMULARIO

*/

let regExp5 = /^.$/i;
let regExp6 = /^\.$/i;
console.log(regExp6.test("X"));



/**
 * \s -> espacio
 * [] -> cualquier caracter del interior
 * [^] -> no puede existir ningun caracter de ahí dentro
 * | -> alternativa, o lo q esta  a la izq, o a la dcha
 */

let regExp7 =/^\s.\s$/i;
console.log(regExp7.test(" X ")); // true
console.log(regExp7.test("X ")); // false
console.log(regExp7.test(" X")); // false
console.log(regExp7.test(" X  ")); // false, hay 2 espacios al final

let regExp8 =/^[aeiou]/i;
console.log(regExp8.test("f"));
console.log(regExp8.test("ab"));

let regExp9 =/^[^aeiou]$/i;
console.log(regExp9.test("a")); // false
console.log(regExp9.test("h")); // true, no esta la h entre esos caracteres

let regExp10 =/casa|cama/i;
console.log(regExp10.test("casa")); // true
console.log(regExp10.test("cama")); //true
console.log(regExp10.test("capa")); //false

let regExp11 =/[^ca|ma]/i;
console.log(regExp11.test("ca")); // false
console.log(regExp11.test("ma")); // false
console.log(regExp11.test("fa")); // true
console.log(regExp11.test("fan")); //true


/**
 * [a-z] -> cualquier letra minusuclas menos acentos u ñ
 * [A-Z] -> cualquier letra mayusuclas menos acentos u ñ
 * [0-9] -> números // \d (ambas cosas son lo msimo)
 * [^0-9] -> que no haya un numero // \D (ambas cosas son lo mismo)
 * [a-zA-z] -> una letra cualquiera
 * [^a-zA-Z] -> no admite letras
 * [0-9a-zA-z] -> que haya caracter alfanumerico
 * [^0-9a-zA-z] -> que no haya caracter alfanumerico
 * [ ] -> un espacio
 * [\t] -> tabulador
 * [\r] -> salto de carro
 * [\n]-> salto de linea
 * [\f] -> fin de formulario
 * [ \t\r\n\f] -> es lo mismo que \s
 * [^ \t\r\n\f] -> es lo mismo que \S
 */

//el triangulo dentro de los corchetes niega

let regExp12 = /^[a-z]$/; ///^[a-z]|ñ$/; -> asi si encontraría la ñ
console.log(regExp12.test("ñ"));
console.log(regExp12.test("x"));

let regExp13 = /^[0-9]$/;
console.log(regExp13.test("4"));
console.log(regExp13.test("47")); // false pq tiene q empezar y termianr por uno de esos numeros

let regExp14 = /^\d$/;
console.log(regExp14.test("7"));

let regExp15 = /^[^0-9]$/;
console.log(regExp15.test("7"));
console.log(regExp15.test("r"));

console.log("---------barra b--------")

/**
 * \b -> un texto con espacios o simbolos de puntuacion o al principio o al final
 * \B ->
 * 
 */

let regExp16 = /fo\b/;
console.log(regExp16.test("Esto es un parrafo de texto.")); // true
console.log(regExp16.test("Esto es un parrafo ")); // true
console.log(regExp16.test("circulo es forma ")); // false pq despues de fo hay algo mas


let regExp17= /\Bfo/;
console.log(regExp17.test("Esto es un parrafo de texto.")); // true
console.log(regExp17.test("Esto es un parrafo.")); //true
console.log(regExp17.test("Un circulo es una forma")); //false
console.log(regExp17.test("Frase que termina en fo")); //false


console.log("---------*--------")

// * -> un caracter que aparece 0 o mas veces
let regExp18 =/a*/;
console.log(regExp18.test("")); //true
let regExp19 =/a*b/;
console.log(regExp19.test("aaaaaab")); //true
console.log(regExp19.test("c")); //false


console.log("---------+--------")
// + -> un caracter que aparece 1 o mas veces
let regExp20 = /a+/;
console.log(regExp20.test("")); // false
console.log(regExp20.test("a")); //true
console.log(regExp20.test("bb")); //false
console.log(regExp20.test("bba")); //true

console.log("---------?--------")
// ? -> el caracter anterior puede o no aparecer (de la palabra) (ej: disparo(s))
let regExp21 = /disparos?/;
console.log(regExp21.test("escuche disparos en la habitacion")); // true, aparece disparos
console.log(regExp21.test("escuche un disparo al sujero")); // true, la s puede o no aparecer
console.log(regExp21.test("la pistola era de agua")); // false, no hay ni disparo ni disparos

let regExp22 = /(disparos)/;
console.log(regExp22.test("la pistola era de disparo agua")); // false, no aparece la palabra entera


console.log("---------{n,m}--------");
// {n} -> el caracter anterior aparece n veces
// {n,} -> el caracter anterior aparece n o mas veces
// {n,m} -> el caracter anterior aparece entre n y m veces // no funciona
let regExp23 = /x{3}/;
console.log(regExp23.test("holaxxx")); // true, la x aparece 3 veces
console.log(regExp23.test("holaxx")); // false, la x aparece solo 2 veces
let regExp24 = /x{3,}/;
console.log(regExp24.test("holaxx x")); // false, no aparece 3 o mas veces SEGUIDAS
console.log(regExp24.test("holaxxxxxxxxx x")); // true, la x aparece 3 veces o mas seguidas
let regExp25= /^x{3,5}$/; // empiece y termine, entre 3 y 5
console.log(regExp25.test("xxxxxx")); // false pq son mas de 5

let regExp26 = /^[0-9]{2}$/; //numero que empiece y termine por 2 cifras
console.log(regExp26.test(2)); // false, solo tiene una cifra
console.log(regExp26.test(225)); //false, son 3 cifras
console.log(regExp26.test(33)); //true, son 2 cifras

regExp26 = /^[0-9]{2,}$/;
console.log(regExp26.test(225)); // true pq encuentra el 2 mas de una vez

regExp26 = /^[0-9]{2,4}$/;
console.log(regExp26.test(22576)); // falso pq son mas de 4 numeros

// IMPORTANTE -> PONER SIEMPRE ^  Y  $

let regExp27 =/7+A/;
console.log(regExp27.test("78364738A"));

/**
 * (x)
 * (?:x)
 * (?=y)
 * x(?!y)
 */


let str = "la ola de la playa tiene más sal que de costumbre";
let regExp28 = /\b[áéíóúa-z]{3}\b/gi;
// console.log(regExp28.test(str));
console.log(regExp28.exec(str));
console.log(regExp28.lastIndex);
console.log(regExp28.exec(str));
console.log(regExp28.lastIndex);
console.log(regExp28.exec(str));



// array con todas las palabras que encuentra q cumple la expresión
console.log(str.match(regExp28));







}