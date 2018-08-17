"use strict";

var categorias = ["Accion", "Suspenso", "Comedia", "Terror", "Romance", "Animado"];
var peliculas = ["Avengers", "Hombre al agua", "Shrek", "Mama Mia!", "El exorcista", "La La Land"];

var cine = [categorias, peliculas];

/*
console.log(cine);
console.log(cine[0]);
console.log(cine[1]);
console.log(cine[0][1]);
*/

/*do{
    var elemento = prompt("Introduce una pelicula: ", "Shrek 3");
    peliculas.push(elemento);
} while(elemento != "ACABAR");

peliculas.pop();
console.log(peliculas);*/

var indice = peliculas.indexOf("El exorcista");

if (indice > -1) {
    peliculas.splice(indice, 1);
}
var peliculas_string = peliculas.join();
var cadena = peliculas_string.split(",")
console.log(cadena);
console.log(peliculas_string);

