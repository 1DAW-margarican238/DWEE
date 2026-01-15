"use strict"
{
    /**Realiza una web del tipo TODO list donde puedas ir guardando tareas y prioridad (alta, media y baja) y las vaya mostrando por orden de prioridad.  */

    //insertar
    let my1H2 = document.createElement("h2");
    my1H2.textContent ="Add tasks to the list";
    document.body.appendChild(my1H2);

    let form = document.createElement("form");

    let myLabel1 = document.createElement("label");
    myLabel1.textContent ="Task name: ";
    form.appendChild(myLabel1);

    let taskInput =document.createElement("input");
    taskInput.type = "text";
    form.appendChild(taskInput);
    
    let myBr = document.createElement("br");
    form.appendChild(myBr);


    let myLabel2 = document.createElement("label");
    myLabel2.textContent ="Priority: ";
    form.appendChild(myLabel2);

    let taskPriority = document.createElement("select");
    let priorityOption1 = document.createElement("option");
    priorityOption1.value = "Alta";
    priorityOption1.textContent = "Alta";
    taskPriority.appendChild(priorityOption1);
    let priorityOption2 = document.createElement("option");
    priorityOption2.value = "Media";
    priorityOption2.textContent = "Media";
    taskPriority.appendChild(priorityOption2);
    let priorityOption3 = document.createElement("option");
    priorityOption3.value = "Baja";
    priorityOption3.textContent = "Baja";
    taskPriority.appendChild(priorityOption3);

    form.appendChild(taskPriority);

   

    let myBtn1 = document.createElement("button");
    myBtn1.textContent ="Add task to the list";
    let myBr2 = document.createElement("br");
    form.appendChild(myBr2);
    form.appendChild(myBtn1);

    document.body.appendChild(form);

    let my2H2 = document.createElement("h2");
    my2H2.textContent ="All Tasks";
    document.body.appendChild(my2H2);

    let myBtn2 = document.createElement("button");
    myBtn2.textContent ="Show all tasks";
    document.body.appendChild(myBtn2);

   
    let seleccion = document.querySelector("select");
    let select = seleccion.value;

    seleccion.addEventListener("change", (ev) => { 
        select = ev.target.value; 
    });

    let allMyTasks =JSON.parse(localStorage.getItem("arrayTasks"));
    if (allMyTasks === null) {
        allMyTasks = [];
    }

    form.addEventListener("submit", (ev) => {
        ev.preventDefault();
        let name = document.querySelector("input").value;
        let isValid = true;
        if (!name.trim()) {
            isValid = false; 
        }
        if (isValid) {
            let myTarea = {
                nombre: name,
                prioridad: select
            }
        
       
        allMyTasks.push(myTarea);
        localStorage.setItem("arrayTasks",JSON.stringify(allMyTasks));
        };
    });
        

    myBtn2.addEventListener("click",(ev)=>{
        if (allMyTasks.length === 0) {
            console.log("no hay tasks")
        }else{
             
            let priorityNumber ={
                "Alta":1,
                "Media":2,
                "Baja":3
            }



            allMyTasks.sort((a, b) => priorityNumber[a.prioridad] - priorityNumber[b.prioridad]);
            let limpiar = document.querySelectorAll("h3");
            limpiar.forEach(h3 => {
                h3.remove()
            });
            allMyTasks.forEach(elem => {
                let myh3 = document.createElement("h3");
                myh3.textContent = "Task Name: " + elem.nombre + ". Priority: " + elem.prioridad;
                document.body.appendChild(myh3); 
            });
        }
    });






}