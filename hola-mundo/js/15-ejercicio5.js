"use strict";

var numero = parseInt(prompt("Introduce el numero:", 1));

document.write("<h1>Numeros que son divisores de" + numero + ":</h1>");
for (var i = 1; i <= numero; i++) {
    if (numero % i === 0) {
        document.write("[" + i + "]");
    }
}