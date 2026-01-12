"use strict"
{
  /**
    ** Usando la tecnología de localStorage, almacena en una variable llamada username el nombre del usuario y, al cargar la página, verificar:
     * - si la variable no existe:
     *    - Indicarle al usuario que no está identificado.
     *    - Mostrarle un prompt para que introduzca su nombre de usuario.
     *    - Controlar si deja el prompt en blanco y hace click en cancelar.
     *    - guardar el valor de la variable username.
     * - si la variable ya existe:
     *    - Saludar al usuario escribiendo: ¡Bienvenido de nuevo, username!
     * Añadir en la parte superior un botón para eliminar la variable username del localStorage
     * 
     * NOTA: excepto el prompt para pedirle los datos al usuario, todo debe escribirse en el DOM
     *  usando los elementos HTML que creas necesarios en Javascript
     * NOTA2: probar el funcionamiento recargando la página tras haber introducido un username y tras borrarlo tanto con el botón como desde el navegador.
     *
    */  

   let myH2 = document.createElement("h2");

    let button = document.createElement("button");
        button.textContent ="Elimina el usuario";
        document.body.appendChild(button);

    button.addEventListener("click",(ev)=>{
        localStorage.removeItem("username");
        obtenerUsuario();
    })


    function obtenerUsuario(){
        let username = localStorage.getItem("username");

        if(!username){
            myH2.textContent ="Usuario no identificado";
            document.body.appendChild(myH2);
            username = prompt("Introduzca su nombre de usuario");
            username = username.trim();

            if (username !=="" && username !==null) {
                localStorage.setItem("username", username);
                myH2.textContent="Bienvenido de nuevo, " + username + "!";
            } else {
                myH2.textContent="Usuario no identificado.";
            }
            
        }else{
            myH2.textContent="Bienvenido de nuevo, " + username + "!";
            document.body.appendChild(myH2);

          }
    }

    obtenerUsuario();
   
}