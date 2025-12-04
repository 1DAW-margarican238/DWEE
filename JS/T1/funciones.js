"use strict"
{
    function f (param1, param2, param3 =7){
        console.log(param1);
        console.log(param2);
        console.log(param3);
        // return "x";

    }

    // llamada
    f(10, 20,  30);
    f(10,20);

    //los tres puntos son para que a partir de ellos todo lo escrito sea un ARRAY
    function f2 (param1, param2=1, ...param3){
       console.log(param1);
        console.log(param2);
        console.log(param3);  
    }

    f2(10,20,30);
    f2(10,20);
    f2(10);
    f2(10,20,30,40,50,60,70,80);


    const f3 = function(param1, param2, param3 =0){
        console.log("esto es bastante raro");
        return 10+30;
    }
    console.log(f3);
    let x = f3 (10,20);
    console.log(x);

    (function(){
        console.log("funcion anonima1")
    })();

    (function(param1, param2, param3=30){
    console.log("funcion  anonima2");
    console.log(param1)
    console.log(param2)
    console.log(param3)
    })(10,20,40);

    // let v =(function(param1, param2,param3=30){
    //     console.log("funcion  anonima3");
    //     // return 0;
    //     return parseInt(param1)+parseInt(param2);
    // })(prompt("introduce param1", 10),prompt("introduce param2",20));  

    // console.log(v);


    //pag 30 a 32



    




}