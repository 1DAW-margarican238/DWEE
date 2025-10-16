"use strict"
{
    function myFunction(cad, patron){
        let regExp = new RegExp(patron, "g");
        return cad.replace(regExp,"");
    };

    console.log(myFunction("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz"));
};
