"use strict";


do {
    var numero = parseInt(prompt("Introduce el numero:", 1));
} while (isNaN(numero));

if (numero % 2 === 0) {
    console.log("El numero [" + numero + "] es un numero par.");
} else {
    console.log("El numero [" + numero + "] es un numero impar.");
}