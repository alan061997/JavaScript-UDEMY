"use strict";

// PARAMETROS REST Y SPREAD

function listadoFrutas(fruta1, fruta2, ...restoFrutas) {
    console.log("Fruta 1: " + fruta1);
    console.log("Fruta 2: " + fruta2);
    console.log(restoFrutas);
}

listadoFrutas("Naranja", "Manzana", "Sandia", "Pera", "Piña", "Fresa");

var frutas = ["Naranja", "Manzana"];
listadoFrutas(...frutas, "Sandia", "Pera", "Piña", "Fresa");