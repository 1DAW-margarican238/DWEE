"use strict"
{
    // EXERCISE 1: Using prompt, ask a number N to an user and create in DOM N paragraphs with a random number between 0 and 10 each one.

    function excercise1(){
        let n = prompt("Enter a number")
        n= parseInt(n);

        if(n>0){
            for (let i = 0;i<n;i++){
                let p = document.createElement("p");
                let ranNumber = Math.floor(Math.random()*10);
                p.textContent = ranNumber;
                document.body.append(p); 
            }

        }else{
            alert("Not a valid number")
        }

    }

    // excercise1();

/** Codigo Miguel
 * function excersice1 () {
        let number = prompt('Introduzca un número: ');
        for(let i = 0; i < number; i++) {
            let newP = document.createElement('p');
            let rand = Math.floor(Math.random()*11);
            let adjElem = document.createElement('p');
            adjElem.textContent = 'Parrafo ' + i;
            document.body.insertAdjacentElement('afterbegin',newP);
            newP.insertAdjacentElement('beforebegin',adjElem);
        }
    }
 */



//EXERCISE 2: Using prompt, ask a number N to an user and create in DOM N H2 elements writing inside a paragraph your name in bold and italic + a random number between 1 and 10.

function excercise2(){
    let n = prompt("Enter a number:");

    if(n>0){
        for (let i = 0;i<n;i++){
            let h2 = document.createElement("h2");
            let ranNumber = Math.floor(Math.random()*10)+1;
            h2.innerHTML = "<p><strong><i>Margarita " + ranNumber +"</i></strong></p>";
            document.body.appendChild(h2);
        }
    }else{
        alert("Not a valid number")
    }
}


// excercise2();

// EXERCISE 3: Using prompt, ask a number N to an user and create in DOM an unordered list with N random numbers between 1 and 15 for each element in bold.


function excercise3(){
    let n = prompt("Enter a number:");
    let ul = document.createElement("ul");
     if(n>0){
        for (let i = 0;i<n;i++){
            let li = document.createElement("li");
            let ranNumber = Math.round(Math.random()*(15-1))+1;
            li.innerHTML = "<strong>" + ranNumber +"</strong>";
            ul.appendChild(li);
        }
         document.body.append(ul);
    }else{
        alert("Not a valid number")
    }

}

excercise3();







}