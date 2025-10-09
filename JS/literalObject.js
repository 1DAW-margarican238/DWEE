"use strict"
{



    // objeto literal
    let persona = {
        nombre : "pepe",
        edad : 30,
        ciudad: "Cádiz"
    };

console.log(persona);

// para acceder a una propiedad especifica
console.log(persona.nombre);

// para cambiar un valor
persona.edad = 33;
console.log(persona.edad);

//otra forma de acceder a las propiedades
console.log(persona["nombre"]);

//objeto literal con una propiedad que es otro objeto literal
let animal = {
    tipo: "gato",
    patas :"4",
    tieneBigote: true,
    dimensiones :{
        alto: 60,
        ancho: 30,
        largo: 80
    },
    dieta : ["pescado", "pienso","sobras"]
}

console.log(animal);

// cambiarle un valor de propiedad en propipedad

animal.dimensiones["largo"] = 90; // o animal.dimensiones.largo
console.log(animal);



let personaCompleta = {
    nombre: "Hugo",
    dni: "28123456T",
    edad: 19,
    ciudad: "Sevilla",
    pasatiempos: ["jugar a consola", "javascript", "escuchar musica" ],
    contacto : {
        email: "hsilben979@g.educaand.es",
        telefono : 624975516,
        instagram: "@noQuieroDecirlo"
    },
    saludar (){
        console.log("Holaaaaaaaa");
    },
    saludarCompleto(){
        console.log("Hola, me llamo " + this.nombre + ` y tengo ${this.edad} ` + " años.")
    },
    decirEmail(){
        return this.contacto.email;
    }
}

personaCompleta.saludarCompleto();
let e = personaCompleta.decirEmail();
console.log(e);


// DESESTRUCTURACIÓN DE UN OBJETO LITERAL
// personaCompleta.nombre;
const {nombre:n,dni:id, contacto:c} = personaCompleta;
const {email, telefono:tf, instagram:ig} = c;
console.log(n);
console.log(ig);


// UNIR DOS OBJETOS LITERALES
let producto = {
    nombreProducto: "Lejía",
    precio :2.95,
    marca :"Don Limpio",
}
let colores = {
    colorLiquido: "Amarillo",
    colorRecipiente: "Blanco",
    colorTapon: "Azul"
};

// UNIR OBJETOS LITERALES POR REFERENCIA
// let productoColor = {producto,colores};
// console.log(productoColor);
// producto.nombreProducto ="Suavizante";
// console.log(productoColor);
// eso esta mal!!!!! ?????

// UNI OBJETOS LITERALES POR COPIA
let productoColor2 = {...producto,...colores};
console.log(productoColor2);
producto.nombreProducto ="Suavizante";
console.log(productoColor2); // sigue poniendo lejia pq es una copia


}