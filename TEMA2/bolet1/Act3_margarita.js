"use strict"
{
// Realiza un programa que cree 100 elementos “checkbox” con números aleatorios.
//Además, la página tendrá un botón “Marcar todos” y un botón “Desmarcar todos”, con su correspondiente funcionalidad
//El label de los checks es un n consecutivo desde el 0 en adelante, de 1 en 1
//Los números aleatorios serán entre 100 y 200, que serán el value del check
//Cuando hagas click en un check, te debe escribir por consola lo siguiente:
// checkXXX marcado
// chechXXX desmarcado
//siendo XXX el value



    let checkBtn = document.createElement("button");
    checkBtn.textContent="Check all";
    document.body.appendChild(checkBtn);

    let unCheckBtn = document.createElement("button");
    unCheckBtn.textContent="UnCheck all";
    document.body.appendChild(unCheckBtn);
    
    let biggerEven = document.createElement("button");
    biggerEven.textContent="Evens' bigger";
    document.body.appendChild(biggerEven);

    let normalEven = document.createElement("button");
    normalEven.textContent="Evens' normal";
    document.body.appendChild(normalEven);

    let br = document.createElement("br")
        document.body.appendChild(br);
    function getRandomNumber() {
        return Math.floor(Math.random() * (200 - 100 + 1)) + 100;
    }    

    for(let i=0;i<100;i++){
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        let random = getRandomNumber()
        
        checkbox.value = random;
        checkbox.id = i;
        let label = document.createElement("label");
        label.textContent = "check" + i;
        label.setAttribute("for", i);
        document.body.appendChild(checkbox);
        document.body.appendChild(label);
        let br = document.createElement("br")
        document.body.appendChild(br);

        checkbox.addEventListener("click", ()=>{
            if(checkbox.checked){
                console.log("checkbox"+checkbox.value+" marcado");
            }else{
                console.log("checkbox"+checkbox.value+" desmarcado");
            }
        });
    }

    checkBtn.addEventListener("click",()=>{
        let inputs = document.getElementsByTagName("input");
        for(let checkbox of inputs) {
          checkbox.checked = true;
          console.log("check"+checkbox.value+" marcado");
        }
    });

     unCheckBtn.addEventListener("click",()=>{
        let inputs = document.getElementsByTagName("input");
        for(let checkbox of inputs) {
          checkbox.checked = false;
          console.log("check"+checkbox.value+" desmarcado");
        }
    });

    
    biggerEven.addEventListener("click", ()=>{
    let inputs = document.getElementsByTagName("input");
    for(let checkbox of inputs){
        if (checkbox.value % 2 == 0){
           checkbox.style.height = "50px";
           checkbox.style.width = "50px";
        }
    }
    });

    normalEven.addEventListener("click", ()=>{
    let inputs = document.getElementsByTagName("input");
    for(let checkbox of inputs){
           checkbox.style.height = "auto";
           checkbox.style.width = "auto";
        
    }
    });

    





}