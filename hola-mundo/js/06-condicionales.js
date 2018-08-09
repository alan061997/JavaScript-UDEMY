'use strict';

// Condicional if
// Estructura de control que nos permite controlar el flujo de codigo
// Si A es igual a B entonces C

/* Ejemplo 1
var edad1 = 10;
var edad2 = 12;

// Si pasa esto entonces...
if(edad1 > edad2){
    // Ejecuta esto
    console.log("Edad1 es mayor a Edad2");
} else{
    console.log("Edad1 no es mayor que Edad2");
}*/

var edad = 21;
var nombre = "Alberto Alan Zul Rabasa";

/*
// Operadores relacionales
    Menor: <
    Mayor: >
    Menor o igual: <=
    Mayor o igual: >=
    Igual: ==
    Distinto: !=
 */

if (edad >= 18) {
    console.log(nombre + " tiene " + edad + " años, es mayor de edad.");

    if (edad <= 33) {
        console.log("Todavia es milenial.");
    } else if (edad <= 70) {
        console.log("Ya no eres milenial.");
    } else {
        console.log("Eres anciano.");
    }
} else {
    console.log(nombre + " tiene " + edad + " años, es menor de edad.");
}