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
    // function miFuncion2(n){
    //     if(n === 0){
    //         return n;
    //     }else{
    //         return miFuncion2 *=n;
    //     }
    // }

    // console.log(miFuncion2(5));

}