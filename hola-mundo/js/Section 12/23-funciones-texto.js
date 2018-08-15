"use strict";

// Transformacion de cadenas de texto
var numero = 444;
var texto1 = "Bienvenido al curso de JavaScript curso curso.";
var texto2 = "Es un muy buen curso.";

var busqueda = texto1.indexOf("curso");
console.log(busqueda);

busqueda = texto1.lastIndexOf("curso");
console.log(busqueda);

busqueda = texto1.search("curso");
console.log(busqueda);

busqueda = texto1.match("/curso/g");
console.log(busqueda);

busqueda = texto1.substr(14, 5);
console.log(busqueda);

busqueda = texto1.charAt(44);
console.log(busqueda);

busqueda = texto1.startsWith("Bienvenido al curso");
console.log(busqueda);

busqueda = texto1.endsWith("curso curso.");
console.log(busqueda);

busqueda = texto1.includes("JavaScript.");
console.log(busqueda);