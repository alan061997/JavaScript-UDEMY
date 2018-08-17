"use strict";

// Arreglos

var nombre = "Alberto";
var nombres = ["Alberto Alan", "Luis Erick", "Rodolfo", "Arturo", 420, true];
var lenguajes = ["PHP", "JS", "Java", "Go", "Python"];

/*var elemento = parseInt(prompt("¿Que elemento del array quieres?", 0));

while(true)
if (elemento >= nombres.length || isNaN(elemento)) {
    alert("El indice no es valido porfavor elige un numero de 0 a " + (nombres.length - 1));
    elemento = parseInt(prompt("¿Que elemento del array quieres?", 0));
} else {
    alert("El elemento seleccionado es: ["+nombres[elemento]+"]");
    break;
}*/

document.write("<h1>Lenguajes de programacion</h1><br/>");
document.write("<ul>");

/*for (var i = 0; i < lenguajes.length; i++) {
    document.write("<li>" + lenguajes[i] + "</li>");
}*/

/*
lenguajes.forEach((elemento, indice, arr) => {
    console.log(arr);
    document.write("<li>" + indice + " - " + elemento + "</li>");
});
*/

for (let lenguaje in lenguajes) {
    document.write("<li>" + lenguajes[lenguaje] + "</li>")
}

document.write("</ul></br>");

