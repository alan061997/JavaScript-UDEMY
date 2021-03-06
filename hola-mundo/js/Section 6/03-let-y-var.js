'use strict';

// Pruebas con let y var <<Diferencias de alcance>>

// Prueba con var
var numero = 40;
console.log(numero); // valor 40

if (numero === 40) {
    numero = 50;
    console.log(numero); // valor 50
}

console.log(numero); // valor 50

// Prueba con let
let texto = "Curso de JavaScript";
console.log(texto); // valor "Curso de JavaScript"

if (texto === "Curso de JavaScript") {
    let texto = "Section 6 - Lectura 20";
    console.log(texto); // valor "Section 6 - Lectura 20"
}

console.log(texto); // valor "Curso de JavaScript"
