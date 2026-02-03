let myLo: Personaje = {
    name: "Teacher",
    hp: 100,
    skills: ["javascript", "excel"],
    puebloNatal: "Sevilla"
}

//decir el tipo de dato de cada valor ->creando una interfaz 
//crear interfaza de objeto literal ->
interface Personaje {
    name: string,
    hp: number,
    skills: string[], //array de string
    puebloNatal?: string //puede o no existir
}

//decir que myLo es tipo personaje-> myLo: Personaje

const strider: Personaje = {
    name: "",
    hp: 0,
    skills: []
    //datos: ["gato" ,"perro","gorila"] -> no se puede pq datos no existe en la interfaz personaje
}

