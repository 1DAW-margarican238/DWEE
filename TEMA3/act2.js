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
    function obtenerUsuario(){
        let username = localStorage.getItem("username");
        let myH2 = document.createElement("h2");

        if(!username){
            myH2.textContent ="Usuario no identificado";
            document.body.appendChild(myh2);
            username = prompt("Introduzca su nombre de usuario");
            if (username !=="" && username !==null) {
                localStorage.setItem("username", username);
                myH2.textContent="Bienvenido de nuevo, " + user;
            } else {
                myH2.textContent="Bienvenido, identifícate.";
            }

            
        }



    }

    obtenerUsuario();
   







}