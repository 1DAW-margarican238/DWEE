console.log("Hello, TypeScript");
console.log("-----------");

let myString = "text string";
console.log(typeof myString);
//myString =10; //no because myString is typeOf 

//declaring the typeOf the variable 
let a :string = "hello";
console.log(typeof a );

console.log("-----------");
let b :string = "goodbye";
console.log(a +" and " +b); //concatena

//String is an interace -> 
let bb  : String = "adios"; 

console.log("-----------");

let c : number =10;
let d : number = 6.5;
console.log(c+d); //16.5
console.log(c+d-1); //15.5
console.log("El resultdo es: " + c+d); //106.5 //concatena en vez de sumar
console.log("El resultdo es: " + (c+d)); //ahora si suma


console.log("-----------");

let e : boolean = true;
console.log(typeof e);
// e = null; // no funciona  // o true o false
// e = undefined; //no funciona // o true o false
e = false //si funcioa

console.log("-----------");

//let f :undefined = 10; //no pq es indefinido
let f : undefined; //variable no definida

let ff: string | undefined; //o un string o nada
console.log(ff);
ff ="hola";
console.log(ff);
// ff =3; //no funciona, no puede ser número

console.log("-----------");

let ss :string;
// console.log(ss); //no funciona pq ss no tiene ningun valor string definido
ss ="ahora si funcina";
console.log(ss);

console.log("-----------");

//declarar funciones poniendo el tipo que devuelve despues del parentesis y los dos puntos
function myFunction (a?:  number) : void{
    console.log(a);
}
myFunction();

console.log("-----------");

function myFunction2 () : string{
    return "dwec"
}

function sumar (a: number, b:number) : number{
    //return "hola"; //no pq pide un tipo number no string
    return a+b;
}
console.log("El resultado es; " + 10+5); //105
console.log("El resultado es; " + sumar(10,5)); //15 

console.log("-----------");

// let myArray : Array<String> = ["elem1","elem2","elem3", 4]; //error pq 4 no es string
let myArray : Array<String> = ["elem1","elem2","elem3"]; //solo string
let myArray2 : (string | number)[] = ["elem1","elem2","elem3", 4]; //la misma forma pero declarada de otra forma (tmb -> string[]);
let myArray3 : Array<String | number> = ["elem1","elem2","elem3", 4]; //string o numero


//crear clases //se escriben en mayus
class MyClass {
    //atributos o propiedades //no  se pone ni let ni const, solo private o public o protected; normalmente no poner nada
    //hay q iniciarlizarlos, o crearlos en el constructor metiendo los parametros
    name :string;
    age: number =19;

    //constructor //solo 1 // solo se puede llamar constructor

    // constructor (n:string, a:number){
    //     this.name = n; //asignar el valor
    //     this.age = a; //asignar el valor
    // }

    //para poder poner la edad q queramos
    constructor (n:string, a?:number){
        this.name = n; //asignar el valor
        if(a){
            this.age = a;
        }
    }
    set incrementaEdad (edad: number){
        this.age =edad;
    }
}

//creando un objeto de mi clase
let myClass = new MyClass("Margarita",20);
let myClass2 : MyClass = new MyClass("Margarita"); // -> age =19, constructor 2

console.log(myClass2.age);
console.log(myClass.age);


console.log("-----------");