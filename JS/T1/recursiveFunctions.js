"use strict"
{
    // caso base
    //caso recursivo

    //n=10 => 10 9 8 7 6 5 4 3 2 1
    function countDown1(n){
        if(n===1){ //base case
            console.log(1);
        }else{ // recursive case
            console.log(n);
            countDown1(n-1);
        }
    }
    // countDown1(1); // 1
    // countDown1(5); // 5 4 3 2 1

    //n=10 => 1 2 3 4 5 6 7 8 9 10
    function countUp(min,max){
        if(min  === max){
            console.log(max);
        }else{
            console.log(min);
            countUp(min+1, max);
        }
    }
    // countUp(1,10); // 1 2 3 4 5 6 7 8 9 10

    let countDown2 = function (n){
        //base case
        if ( n === 1){
            console.log(1);
        }else{
            console.log(n);
            countDown2 (n-1); // llamada por la variable en vez de la funcion
        }
    }

    // call
    // countDown2(10);

    let countDown3 = (n) => {  // the same but with an arrow function
        if ( n === 1){
            console.log(n);
        }else{
            console.log(n);
            countDown3 (n-1);
        }
    };
    // countDown3(20);



    // recursive functions with return

    //a recursive function that return "even" or "odd"
    // depending on if the number is even or odd

    function evenOdd1(n){
        if(n===0){
            return 'even';
        }else if (n === 1){
            return 'odd';
        }else{
            return evenOdd1(n-2);
        }
    }
//    let x = evenOdd1(10); 
//    console.log(x); //even
//    let y = evenOdd1(13); 
//    console.log(y); //odd


 let evenOdd2 = (n) => { // the same but with an arrow function
        if(n===0){
            return 'even';
        }else if (n === 1){
            return 'odd';
        }else{
            return evenOdd2(n-2);
        }
    };
    let x = evenOdd2(2);
    console.log(x);
    let y = evenOdd2(3);
    console.log(y);




    

}