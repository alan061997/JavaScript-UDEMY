'use strict'

// VARIABLES
// Una variable es un contenedor de informacion

// Las variables definidas con "var" son globales y pueden ser llamadas en todos los bloques de codigo.
var pais = "Mexico";
var continente = "America";
var antiguedad = 2019;
var pais_y_continente = pais + ' ' + continente;

// Las variables definidas con "let" son variables limitadas a su bloque de codigo
let prueba = "Hola";
alert(prueba);

pais = "España";
continente = "Europa";

console.log(pais, continente, antiguedad);
alert(pais_y_continente);