"use strict";

/*
Mostrar todos los numeros impares que existan dentro de dos numeros introducidos por el usuarop
 */

var num1 = parseInt(prompt("Primer numero:", 0));
var num2 = parseInt(prompt("Segundo numero:", 0));


document.write("<h1>Del " + num1 + "al " + num2 + " estan los numeros impares:</h1>");
while (num1 < num2) {
    num1++;
    if ((num1 % 2 !== 0) && num1 !== num2) {
        document.write("[" + num1 + "]");
    }

}