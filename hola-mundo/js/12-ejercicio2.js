"use strict";

/*
EJERCICIO 2:
    Utilizando un bucle, mostrar la suma  y la media de  los numeros introducidos
    hasta introducir un numero negativo y despues mostrar el resultado.
 */

var suma = 0;
var contador = 0;

do {
    var numero = parseInt(prompt("Introduce el dato #" + contador + " hasta que metas negativos: "));
    if (isNaN(numero)) {
        numero = 0;
    } else if (numero >= 0) {
        suma += numero;
        contador++;
    }
} while (numero >= 0);

console.log("SUMA: " + suma);
console.log("MEDIA: " + suma / contador);