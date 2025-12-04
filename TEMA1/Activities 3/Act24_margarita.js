"use strict"
{
    function myFunction (cad, patron) {
        return cad.replaceAll(patron,"");
    }

    console.log(myFunction("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz"));
};
