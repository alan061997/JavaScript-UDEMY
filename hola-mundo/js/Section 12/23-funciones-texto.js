"use strict";

// Transformacion de cadenas de texto
var numero = 444;
var texto1 = "Bienvenido al curso de JavaScript curso curso.";
var texto2 = "Es un muy buen curso.";


// Funciones de busqueda
console.log("Funciones de busqueda\n\n");
console.log("[ indexOf ]");
var busqueda = texto1.indexOf("curso");
console.log(busqueda);

console.log("[ lastIndexOf ]");
busqueda = texto1.lastIndexOf("curso");
console.log(busqueda);

console.log("[ Search ]");
busqueda = texto1.search("curso");
console.log(busqueda);

console.log("[ Match ]");
busqueda = texto1.match("/curso/g");
console.log(busqueda);

console.log("[ Substring ]");
busqueda = texto1.substr(14, 5);
console.log(busqueda);

console.log("[ Character At ]");
busqueda = texto1.charAt(44);
console.log(busqueda);

console.log("[ Starts With ]");
busqueda = texto1.startsWith("Bienvenido al curso");
console.log(busqueda);

console.log("[ Ends With ]");
busqueda = texto1.endsWith("curso curso.");
console.log(busqueda);

console.log("[ Includes ]");
busqueda = texto1.includes("JavaScript.");
console.log(busqueda);

// Funciones de reemplazo
console.log("Funciones de reemplazo\n\n");
console.log("[ Replace ]");
busqueda = texto1.replace("JavaScript", "Symphony");
console.log(busqueda);

console.log("[ Split ]");
busqueda = texto1.split(14, 22);
console.log(busqueda);
busqueda = texto1.split(" ");
console.log(busqueda);


console.log("[ Slice ]");
busqueda = texto.slice(14);
console.log(busqueda);
busqueda = texto.slice(14, 22);
console.log(busqueda);

console.log("[ Slice ]");
busqueda = texto.slice(14);
console.log(busqueda);

console.log("[ Trim ]");
busqueda = texto.trim();
console.log(busqueda);