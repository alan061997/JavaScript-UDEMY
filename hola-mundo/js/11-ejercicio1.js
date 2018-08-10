"use strict";

/*
Programa que pida dos valores y determine cual es el mayor,  el menor, o si estos son iguales.
*/

var numero1 = parseInt(prompt("Introduce el primer numero:", 0));
var numero2 = parseInt(prompt("Introduce el primer numero:", 0));

console.log(numero1, numero2);

if (numero1 !== numero2) {
    if (numero1 < numero2) {
        console.log("El primer numero es menor que el segundo numero");
        alert("El primer numero es menor que el segundo numero");
    } else {
        console.log("El primer numero es mayor que el segundo numero");
        alert("El primer numero es mayor que el segundo numero");
    }
} else {
    console.log("Los dos numeros son iguales.");
    alert("Los dos numeros son iguales.");
}