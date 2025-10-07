"use strict"

{
  function validarDNI(dni) {
    if (dni.length !== 9) {
      return 'Invalid DNI';
    }

    for (let i = 0; i < 8; i++) {
      const codigo = dni.charCodeAt(i);
      if (codigo < 48 || codigo > 57) { // numeros del 0 al 9
        return 'Valid DNI';
      }
    }

    let regExp = /[^a-zA-Z]/;
    const letra = dni.charAt(8);
    if(regExp.test(letra) == true){
        return 'Invalid dni'
    }
    
    return 'Valid DNI';
  }

  console.log(validarDNI('12345678Z')); // valid
  console.log(validarDNI('1234567Z')); // invalid (only 7 numbers)
  console.log(validarDNI('12345678')); //invalid, no letter
  console.log(validarDNI('12345678.')); //invalid, there is no letter





}