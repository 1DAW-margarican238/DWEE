"use strict"
{
// Realiza un formulario que tenga dos campos de texto. Deberá validar antes de enviarse si uno de los campos es un anagrama del otro y enviarse solo si lo es. Se ignorarán mayúsculas, minúsculas y espacios.
// Para más información sobre que es un anagrama https://es.wikipedia.org/wiki/Anagrama

    let formulario = document.querySelector("form");
    let campo1 = document.querySelector("#campo1");
    let campo2 = document.querySelector("#campo2");

    formulario.addEventListener("submit", (ev) => {
        let texto1 = campo1.value.trim().toLowerCase();
        let texto2 = campo2.value.trim().toLowerCase();
        if (texto1 === texto2) {
            return;
        }
        
        let t2invert = texto2.split("").reverse().join("");
        if (texto1 !== t2invert) {
            ev.preventDefault();
            let p = document.createElement("p");
            p.textContent ="Los campos no son anagramas";
            p.style.color ="red"
            document.body.appendChild(p);
            setTimeout(() => {
                p.remove();
            }, 3000);
        }

    });


}