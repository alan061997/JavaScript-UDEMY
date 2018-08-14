"use strict";

// Funciones anonimas

function sumame(numero1, numero2, sumaYMuestra, sumaPorDos) {
    var suma = numero1 + numero2;
    sumaYMuestra(suma);
    sumaPorDos(suma);
    return suma;
}

sumame(5, 10, function (dato) {
        console.log("La suma es: " + dato);
    },
    function (dato) {
        console.log("La suma por dos es: " + (dato * 2));
    });