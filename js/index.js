let aliveList = ["NOA", "CARMEN C.", "VEFLO", "ELENA", "ANA"];
let deadList = [];
console.log(aliveList);
//---AQUÍ LLAMAMOS A RELLENAR LISTAS---//
window.addEventListener("kill", rellenarListas);

//---AQUÍ FUNCIÓN RELLENAR LISTAS---//
function rellenarListas(){
    //Obtenemos los elementos HTML en los que mostramos los listados
    let aliveList = document.getElementById("aliveList");
    let deadList = document.getElementById("deadList");

    //Para los vivos
    aliveList.innerHTML = "";
    alives.forEach(
        (element) => {
            aliveList.innerHTML += ('<li>' + element + '</li>');
        }
    );

    //Para los muertos
    deadList.innerHTML = "";
    deads.forEach(
        (element) => {
            deadList.innerHTML += ('<li>' + element + '</li>');
        }
    );

}

//---AQUÍ FUNCIÓN MEDIR LONGITUD LISTA DE NOMBRES---//
function calculeLengthArray(arrayList){
    let lengthList = 0;
    lengthList = arrayList.length;
    return(lengthList);
}

//---AQUÍ COMPRUEBO SI MIDE BIEN LA LISTA---//
let lenghtListName = calculeLengthArray(aliveList);
console.log("Longitud de mi lista: ", lenghtListName);

//---AQUÍ FUNCIÓN SACAR UN NOMBRE AL AZAR DE LA LISTA SIN REPETIR---//
function killRandom(arrayList){
    let lenghtList = arrayList.length;
    let aleatorio = aliveList[Math.floor(Math.random()*aliveList.length)];

    for(index=0;index<lenghtList;index++){

    if(aliveList[index] === aleatorio) {
        aliveList.splice(index, 1);
        deads.unshift(deadList);
    }
    }

    //  AQUÍ SE METERÍA EL BOTÓN  //
    return(aleatorio);
}

// Llamar a la función rellenarListas para actualizar su contenido
rellenarListas();

//---AQUÍ COMPRUEBO SI FUNCIÓN KILLRANDOM FUNCIONA---//
/* let killRandomPerson = killRandom(aliveList);
console.log("Primera persona que ha muerto: ", killRandomPerson);
let killRandomPerson1 = killRandom(aliveList);
console.log("Segunda persona que ha muerto: ", killRandomPerson1);
let killRandomPerson2 = killRandom(aliveList);
console.log("Tercera persona que ha muerto: ", killRandomPerson2);
let killRandomPerson3 = killRandom(aliveList);
console.log("Cuarta persona que ha muerto: ", killRandomPerson3);
let killRandomPerson4 = killRandom(aliveList);
console.log("Quinta persona que ha muerto: ", killRandomPerson4);
let killRandomPerson5 = killRandom(aliveList);
console.log("Sexta persona que ha muerto:", killRandomPerson5); */
//Creo que funciona porque no cuenta más allá de esas 5
//---AQUÍ FUNCIÓN MANDAR A LA LISTA DE FIAMBRES---//

