"use strict"
{
    let a =4;

    const c =6;
    //wrong
    //c+=2;
    // test1();

    {
        let b = 5;
        console.log(b);
        b=b+10;
        console.log(b);
    }

    // console.log(b);

    let myArray =  [1,2,3];
    console.log(myArray[0]);
    myArray[0] = 4;
    console.log(myArray[0]);
    // myArray = []; //wrong

    
    const number = 10;
    printNumber();
    function printNumber (){
        console.log(number);
    }

    function app(){
        const number =5;
        printNumber();
    }
    app();




    /* TIPOS DE DATOS PRIMITIVOS
    number
    boolean
    string
    any
    */

    /* TIPOS DE DATOS NO PRIMITIVOS
    array

    */

    let v = 10.7;
    let b = false;
    let s ="my string";

        //concatenar
    console.log("the string is "+ s);
    console.log(`the string is ${s}`);
    console.log('the string is  ${s}');
    console.log('the string is '+ `${s}`);

    let edad = 23, nuevaEdad, incremento =4;
    // cuando a una variable no se le declara ningun valor automaticamente es 'any'
    const name = "Rosa García";
    console.log(typeof incremento == "number");
    console.log(typeof incremento);
    nuevaEdad = edad+incremento;
    console.log(name + " " + nuevaEdad);
    
    console.log("2" + edad);
    console.log(edad + "2");

    let  str1 = "hello";
    let str2 = str1; //copy, by value
    str1 = "goodbye";
    console.log(str1);
    console.log(str2);
    
    let v1 = ["hello"];
    let v2 = v1; //copy, by reference
    v1.push("goodbye");
    v1.push("IESMM");
    console.log(v1);
    console.log(v2);

    v2 = [...v1]; // spread
    v1.push ("it's too late");
    console.log(v1);
    console.log(v2);

    let numero = 5;
    console.log(numero);
    console.log(numero.toString());

    let x = "2", y=5;
    console.log(typeof x + " " + typeof y);
    console.log(x+y);

    let arr = ["1", "10", "100", "1000"];
    for(let i  =0;i<arr.length && arr[i]<500;i++){ // siempre se usa let
        console.log(i);
    }

    let aa=10;
    let bb="9";
    console.log(aa<bb); //false

    // metodos para convertir entre tipos
    let num ="100";
    let num2= "100.13";
    let num3 =11;

    let n = parseInt(num);
    let n2 = parseFloat(num);
    let n3 = parseFloat(num2);
    let n4 = num3.toString();

    let z = 10;
    

    //entradas y salidas en navegadores
    // alert("Mensaje");
    // console.log("Mensaje");
    // console.table(v1);

    // let answer=confirm("Would you like to cancel this subscription?");
    // alert(answer);

    // answer = prompt("Introduce a province", "Cadiz");
    // //cancelar -> null // aceptar -> the introuced value
    // alert(answer);


    

}