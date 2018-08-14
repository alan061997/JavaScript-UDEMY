"use strict";

// Funciones

function enConsola(numero1, numero2) {
    var resultado = "La suma de " + numero1 + " + " + numero2 + " es: " + (numero1 + numero2) + "\n" +
        "La resta de " + numero1 + " - " + numero2 + " es: " + (numero1 - numero2) + "\n" +
        "La multiplicacion de " + numero1 + " * " + numero2 + " es: " + (numero1 * numero2) + "\n" +
        "La division de " + numero1 + " / " + numero2 + " es: " + (numero1 / numero2) + "\n";
    console.log(resultado);
}

function enPantalla(numero1, numero2) {
    var resultado = "La suma de " + numero1 + " + " + numero2 + " es: " + (numero1 + numero2) + "<br/>" +
        "La resta de " + numero1 + " - " + numero2 + " es: " + (numero1 - numero2) + "<br/>" +
        "La multiplicacion de " + numero1 + " * " + numero2 + " es: " + (numero1 * numero2) + "<br/>" +
        "La division de " + numero1 + " / " + numero2 + " es: " + (numero1 / numero2) + "<br/>";
    document.write(resultado);
}

function calculadora(numero1, numero2, mostrar = false) {
    if (mostrar === false) {
        enConsola(numero1, numero2);
    } else {
        enPantalla(numero1, numero2);
    }
}

/*for (var i = 0; i <= 10; i++) {
    console.log("[" + i + "]");
    calculadora(i, 10);
}*/

calculadora(1, 2, true);
calculadora(2, 1);

