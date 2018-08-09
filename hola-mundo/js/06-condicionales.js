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
    // Es mayor de edad
    console.log(nombre + " tiene " + edad + " años, es mayor de edad.");

    if (edad <= 33) {
        console.log("Todavia es milenial.");
    } else if (edad <= 70) {
        console.log("Ya no eres milenial.");
    } else {
        console.log("Eres anciano.");
    }
} else {
    // Es menor de edad
    console.log(nombre + " tiene " + edad + " años, es menor de edad.");
}

/*
// Operadores Logicos
AND: &&
OR: ||
NEGACIÓN: !
 */

var year = 2018;

// Negación
if (year != 2016) {
    console.log("El año no es 2016, es el año " + year + ".");
}

// AND
if (year >= 2000 && year <= 2020) {
    console.log("Estamos en la era actual.");
} else {
    console.log("Estamos en la era post moderna.");
}

// OR
if (year == 2008 || (year >= 2018 && year == 2028)) {
    console.log("El año acaba en 8.");
} else {
    console.log("AÑO NO REGISTRADO.");
}