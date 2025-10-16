"use strict"
{
    // hacerlo tambien con una funcion recursiva
    function miFuncion(n){
        let acum =1;
        for(let i  = n ; i>0;i--){
            acum *=i;
        }
        return acum;
    }

    console.log(miFuncion(5));

    // recursive function
    function miFuncion2(n){
        if(n === 1){
            return n;
        }else{
            return  n *= miFuncion2(n-1);
        }
    }

    console.log(miFuncion2(5));

}