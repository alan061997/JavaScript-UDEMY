"use strict";

/*
Hacer un programa que muestre los numeros entre dos numeros mintroducidos por el usuario
 */

var num1 = parseInt(prompt("Primer numero:", 0));
var num2 = parseInt(prompt("Segundo numero:", 0));


document.write("<h1>Del " + num1 + "al " + num2 + " estan los numeros:</h1>");
for (var i = num1; i < num2; i++) {
    document.write("[" + i + "]");
}