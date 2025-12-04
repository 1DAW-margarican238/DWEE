"use strict"
{
// . Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) o miFuncion (“01/12/2010”)  function anosPasados(comprobar) {
        let actual = new Date();

        let anos = actual - comprobar;
        return (anos.getFullYear);
    }


    function getEdad (fecha) {
        let anyo = fecha.getFullYear();
        let mes = fecha.getMonth();
        let dia = fecha.getDate();

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

    console.log(getEdad(new Date("12/01/2010")));
}