let alives = ["NOA", "CARMEN C.", "VEFLO", "ELENA", "ANA"];
let deads = [];
console.log(alives);
//---AQUÍ LLAMAMOS A RELLENAR LISTAS---//
window.addEventListener("load", rellenarListas);

//---AQUÍ FUNCIÓN RELLENAR LISTAS---//
function rellenarListas(){
    //Obtenemos los elementos HTML en los que mostramos los listados
    let listaAlive = document.getElementById("listaAlive");
    let listaDead = document.getElementById("listaDead");

    //Para los vivos
    listaAlive.innerHTML = "";
    alives.forEach(
        (element) => {
            listaAlive.innerHTML += ('<li>' + element + '</li>');
        }
    );

    //Para los muertos
    listaDead.innerHTML = "";
    deads.forEach(
        (element) => {
            listaDead.innerHTML += ('<li>' + element + '</li>');
        }
    );

}

//---AQUÍ FUNCIÓN MEDIR LONGITUD LISTA DE NOMBRES---//
function calculeLengthArray(alives){
    let lengthList = 0;
    lengthList = alives.length;
    return(lengthList);
}

//---AQUÍ COMPRUEBO SI MIDE BIEN LA LISTA---//
let lenghtListName = calculeLengthArray(alives);
console.log("Longitud de mi lista: ", lenghtListName);

//---AQUÍ FUNCIÓN SACAR UN NOMBRE AL AZAR DE LA LISTA SIN REPETIR---//
function randomKill(){
    let lenghtList = alives.length;
    let aleatorio = alives[Math.floor(Math.random()*alives.length)];

    for(index=0;index<lenghtList;index++){

    if(alives[index] === aleatorio) {
        alives.splice(index, 1);
        deads.unshift(aleatorio);
    }

    rellenarListas();
    }

    //  AQUÍ SE METERÍA EL BOTÓN  //
    return(aleatorio);
}