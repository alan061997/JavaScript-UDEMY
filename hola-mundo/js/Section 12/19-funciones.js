"use strict";

// Funciones

function calculadora(numero1, numero2) {
    var resultado = "La suma de " + numero1 + " + " + numero2 + " es: " + (numero1 + numero2) + "\n" +
        "La resta de " + numero1 + " - " + numero2 + " es: " + (numero1 - numero2) + "\n" +
        "La multiplicacion de " + numero1 + " * " + numero2 + " es: " + (numero1 * numero2) + "\n" +
        "La division de " + numero1 + " / " + numero2 + " es: " + (numero1 / numero2) + "\n";


    console.log(resultado);
    console.log("\n*********************************\n\n");
}

console.log("*********************************");
console.log("********** CALCULADORA **********");
console.log("*********************************\n\n");

for (var i = 0; i <= 10; i++) {
    console.log("[" + i + "]");
    calculadora(i, 10);
}
