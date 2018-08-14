"use strict";

// Funciones

function calculadora(numero1, numero2, mostrar = false) {
    var resultado = "La suma de " + numero1 + " + " + numero2 + " es: " + (numero1 + numero2) + "\n" +
        "La resta de " + numero1 + " - " + numero2 + " es: " + (numero1 - numero2) + "\n" +
        "La multiplicacion de " + numero1 + " * " + numero2 + " es: " + (numero1 * numero2) + "\n" +
        "La division de " + numero1 + " / " + numero2 + " es: " + (numero1 / numero2) + "\n";

    var resultadoWEB = "La suma de " + numero1 + " + " + numero2 + " es: " + (numero1 + numero2) + "<br/>" +
        "La resta de " + numero1 + " - " + numero2 + " es: " + (numero1 - numero2) + "<br/>" +
        "La multiplicacion de " + numero1 + " * " + numero2 + " es: " + (numero1 * numero2) + "<br/>" +
        "La division de " + numero1 + " / " + numero2 + " es: " + (numero1 / numero2) + "<br/>";

    if (mostrar === false) {
        console.log(resultado);
        console.log("\n*********************************\n\n");
    } else {
        document.write("*********************************<br/>");
        document.write("******** CALCULADORA *********<br/>");
        document.write("*********************************<br/><br/>");
        document.write(resultadoWEB);
        document.write("<br/>*********************************<br/><br/>");
    }
}

console.log("*********************************");
console.log("********** CALCULADORA **********");
console.log("*********************************\n\n");

/*for (var i = 0; i <= 10; i++) {
    console.log("[" + i + "]");
    calculadora(i, 10);
}*/

calculadora(1, 2, true);
calculadora(2, 1);

