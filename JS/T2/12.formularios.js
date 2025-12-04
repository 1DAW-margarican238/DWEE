"use strict"
{

    let myForm1 = document.getElementById("idForm1");
    console.log(myForm1);
    console.log(myForm1.nTexto.value); // valor del input name nTexto
    console.log(myForm1.nUrl.value);
    myForm1.nTexto.value = "Today's raining";


    //acceder a cada elemento del formaulario en vez de al formulario completo
    let inputText1 = document.getElementById("idTexto1");
    inputText1.addEventListener("input", (ev)=>{
        console.log("input");
        console.log(ev.data);
        console.log(ev.target.value);
        console.log(inputText1.value);
    });

    inputText1.addEventListener("change",(ev)=>{
        console.log("CHANGE"+ev.target.value);
    });

    //textarea
    let textArea1 = document.getElementById("idTextArea1");
    console.log(textArea1);
    textArea1.addEventListener("input", (ev)=>{
        console.log(ev.data);
        console.log(ev.target.value);
    });
    textArea1.addEventListener("change", (ev)=>{
        console.log("CHANGE"+ev.target.value);
    });

    let rButton1 = document.getElementsByName("nrButton1");
    console.log(rButton1);
    rButton1.forEach(r=>{
        console.log(r);
         console.log(r.value);
        console.log(r.previousElementSibling.textContent);
        if(r.checked){
            console.log("La opcion marcada es: " + r.value);
        };
    });
    console.log("Tiene "+rButton1.length +" opciones");

    for(let r of rButton1){
        r.addEventListener("change",(ev)=>{
            if(ev.target.checked){
                console.log("se ha marcado " + r.value);
            }
        })
    }

    //CHECKBOX
    let myChecks = document.getElementsByName("ncheck1");
        myChecks.forEach(c=>{
            console.log(c);
            console.log(c.value);
            console.log(c.previousElementSibling.textContent);
            if(c.checked){
                console.log("Esta marcado");
            }
    });

    //listener a cada check
    for (let c of myChecks) {
        c.addEventListener("change", (ev)=>{
            if(c.checked){
                console.log("Me como un " + c.value);
            }else{
                console.log("No me como un " + c.value)
            }
        })
    }

    //select
    let seleccion = document.querySelector("#idLenguaje");
    console.log(seleccion);
    for (let o of seleccion) {
        console.log(o.value);
        console.log(o.textContent);
        console.log(seleccion.selectedIndex);
    }
    console.log("indice seleccionado -> " + seleccion.options[seleccion.selectedIndex].value);

    seleccion.addEventListener("change",(ev)=>{ 
        console.log(`\nEl índice seleccionado es: ${seleccion.selectedIndex}`);
        console.log(`El valor del elemento seleccionado es: ${seleccion.options[seleccion.selectedIndex].value}`);
        console.log(`El texto del elemento seleccionado es: ${seleccion.options[seleccion.selectedIndex].text}`);
    }); //cada vez q cambia la selección


    //selector datalist
    let datalist =  document.querySelector("#idFrutas");
    //convertirlo a array pq no es iterable
    for (let o  of Array.from(datalist.options)) {
        console.log(o.value);
        console.log(o.text);
        console.log(o.textContent);        
    };
    //coger la caja de texto
    let textbox = document.querySelector("#idFrutas1");
    textbox.addEventListener("change",(ev)=>{
    console.log(textbox.value); 
        console.log(ev.target);
        console.log(ev.target.value);
    });


    



}