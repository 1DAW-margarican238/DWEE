"use strict"
{
// Realiza un formulario con dos elementos “select”. Al cambiar el primero, se actualizará el segundo. Al enviar el formulario, se comprobará que ambos han sido marcados.
// Cuando no tengan ninguna selección previa, los “select” mostrarán “Select no seleccionado”.
// Los valores del primer “select” serán “Alicante”, “Castellón”, “Valencia”.
// Por defecto no habrá ninguno seleccionado.
// Los valores del segundo “select” son:
// ● Para Alicante: “Alicante Capital”, “Elche”, “Orihuela”.
// ● Para Castellón: “Castellón Capital”, “Oropesa”, “Vinaroz”.
// ● Para Valencia: “Valencia Capital”, “Torrent”, “Mislata”. (Aquí saldrá por defecto
// seleccionado “Mislata”). 
    

    let provincia = document.getElementById("provincia");
    let ciudad = document.getElementById("ciudad");
    let formulario = document.querySelector("form");

    provincia.addEventListener("change", (ev) =>{
        ciudad.innerHTML = "";
        let opcionDefecto = document.createElement("option");
        opcionDefecto.value = "";
        opcionDefecto.textContent = "Select sin seleccionar";
        ciudad.appendChild(opcionDefecto);
        if (provincia.value === "alicante") {
            ciudad.innerHTML += `
                <option value="alicante_capital">Alicante Capital</option>
                <option value="elche">Elche</option>
                <option value="orihuela">Orihuela</option>
            `;
        }
        if (provincia.value === "castellon") {
            ciudad.innerHTML += `
                <option value="castellon_capital">Castellón Capital</option>
                <option value="oropesa">Oropesa</option>
                <option value="vinaroz">Vinaroz</option>
            `;
        }
        if (provincia.value === "valencia") {
            ciudad.innerHTML += `
                <option value="valencia_capital">Valencia Capital</option>
                <option value="torrent">Torrent</option>
                <option value="mislata" selected>Mislata</option>
            `;
        }
    });

    formulario.addEventListener("submit", (ev)=> {
        if (provincia.value === "" || ciudad.value === "") {
            ev.preventDefault();
            let p = document.createElement("p");
            p.textContent ="Selecciona provincia y/o ciudad";
            p.style.color ="red"
            document.body.appendChild(p);
            setTimeout(() => {
                p.remove();
            }, 3000);
        }
    });





}