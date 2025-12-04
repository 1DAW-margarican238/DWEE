"use strict"
{
// Programa una función para devolver la edad de una persona dada su fecha de nacimiento en este formato dd/mm/aaa.


 function getEdad (fecha) {
        let anyo = fecha.getFullYear();
        let mes = fecha.getMonth();
        let dia = fecha.getDate("");

        let fechaActual = new Date();
        let anyoActual = fechaActual.getFullYear();
        let mesActual = fechaActual.getMonth();
        let diaActual = fechaActual.getDate();

        let edad = anyoActual - anyo - 1; 
        if (mes === mesActual){          
            if (dia < diaActual){       
                edad++;
            }
        }else if (mes < mesActual){
            edad++;
        }

        return edad;
    }

    console.log(getEdad(new Date("11/11/2025")));

}