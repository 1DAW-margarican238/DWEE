
    function addNumbers(a: number,b: number) : number{ //los parçametros y la salida son de tipo number
    return a+b;
};
console.log(addNumbers(10,5));

const addNumbersArrow = (a: number,b: number) : string =>{
    //return (a+b).toString();
    return `${a+b}` //es lo mismo
}
console.log(addNumbersArrow(10,4));

function multiplicar(firstNumber : number, secondNumber?:number, base:number =2){
return firstNumber*base;
}
console.log(multiplicar(5));
console.log(multiplicar(2,4,5)); //2*5 (primer numero por la base)
console.log(multiplicar(2,4));  //4, 2*2 que es la base


interface Personaje2{
    name: string,
    hp: number,
    // showHealthPoints: () => void; //interfaz de una funcion que ni recibe parametros ni devuelve nada
    showHealthPoints: () => number; 
}

let strider: Personaje2 = {
    name: "Strider",
    hp: 50,
    // showHealthPoints(){
    //     console.log(this.hp);
    // }
    showHealthPoints(): number{
        return this.hp;
    }
}
console.log(strider.showHealthPoints());


const curarPersonaje = (p: Personaje2, vida:number) =>{
    p.hp += vida;

}
curarPersonaje(strider,10);
console.log(strider.showHealthPoints());

console.log("------------")
//
interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}
interface Details {
    author: string;
    year: number;
}

let audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
};

//desestructuracion en lo que necesito
let {song: cancion,details} = audioPlayer
let {author: autor,  year: año} = details
console.log(cancion)
console.log(año)
console.log(audioPlayer)

audioPlayer.details.year = 2020;

console.log(audioPlayer.details.year);
console.log(audioPlayer)
