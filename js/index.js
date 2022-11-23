/* let list1 =[["ADRIANA AGUILAR RUIZ", "vero", "carmen"],
["ALBA MARIA RUS MARTINEZ"],
    "ALESIA BALDEÓN MACHUCA",
    "Ana Rueda Guiu",
    "BEATRIZ DE AVILA JIMENEZ",
    "CAMILA RUIZ GUTIERREZ",
    "CARMEN CRUCES FERNANDEZ",
    "CARMEN GALLARDO POZO",
    "ELENA MARIA PEREZ ARJONA",
    "ESTHER DE LUQUE ZURITA",
    "FLORENCIA TISCORNIA",
    "HIMORELL  JARAMILLO GONZALEZ",
    "LEIDY VILLAMIL",
    "LOLA GARCIA MORCILLO",
    "LOLA NAVARRO",
    "MARIA SIERRA PEREZ SÁNCHEZ",
    "NATALIA PALOMO FUENTES",
    "NOA TRUJILLO ZAMORA",
    "PALOMA BABOT LEÓN",
    "PALOMA RUIZ RAMIREZ",
    "PAULA ALEJANDRA RODRIGUEZ AGUDELO",
    "RAQUEL PALOMO FUENTES",
    "SANDRA LEÓN DE RISCO",
    "VERONICA FLORES GUTIERREZ",
    "VERONIKA KOMAROVA",
    "JOSÉ MANUEL formador",
    ]  */

let list1 = ["Elena", "Veflo", "Ana", "Carmen C.", "Noa"];


let deadlist=[]
let position=(Math.round(random))

function killTourist() {
let length= list1.length
let random=(Math.random()*length)

for (let index = 0; index < list1.length; index++) {
    if (list1[index] === random) {
        list1.splice(index, 1)  
    }
}
}

    console.log(length);
    console.log(list1.length);    
    console.log(Math.round(random));
    console.log(list1[position]);
    









