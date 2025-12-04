"use strict"
{
//tr -> fila
//td -> celda

/**
 * Realiza un programa que cree dinámicamente una tabla de 10x10. Cada elemento de la tabla tendrá un número único, que empezará en 1 y se irá incrementando de 1 en 1.
Esta página además tendrá un botón que será “Calcular numeros primos”. Este botón hará que todas las celdas de la tabla que tengan números primos se pongan conun fondo amarillo.
//boton para que las celdas queden de nuevo sin fondo

 */

    let primosBtn = document.createElement("button");
    primosBtn.textContent="Prime numbers";
    document.body.appendChild(primosBtn);

    let clearBtn = document.createElement("button");
    clearBtn.textContent="Clear table";
    document.body.appendChild(clearBtn);

    let table = document.createElement("table");
    document.body.appendChild(table);
    table.style.border = "5px solid salmon";
    table.style.borderRadius = "10px";
    table.style.marginTop = "10px";
 
    let cont = 1;
    for(let i =0;i<10;i++){
        let row = document.createElement("tr");
        for(let j = 0;j<10;j++){
            let place = document.createElement("td");
            place.textContent = cont++;
            row.appendChild(place);
        }
        table.appendChild(row);
    }

      
    function esPrimo(n) {
    if(n == 1) return true;
    if (n < 2) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
    }


    primosBtn.addEventListener("click",function(event){
        let td = document.getElementsByTagName("td");
        for (let cell of td ){
            if (esPrimo(cell.textContent)) {
                cell.style.backgroundColor = "yellow"; 
            }
        
        }
    });

    clearBtn.addEventListener("click", function () {
        let td = document.getElementsByTagName("td");
        for (let cell of td) {
            cell.style.backgroundColor = "";
        }
    });





}



