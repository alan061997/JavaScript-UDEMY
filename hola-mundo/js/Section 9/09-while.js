"use strict";

var year = 2018;

// Bucle while

while (year !== 1991) {
    console.log("Estamos en el año: " + year);

    if (year === 2000) {
        break;
    }

    year--;
}


// Bucle Do While

var years = 30;

do {
    alert("SOLO CUANDO SEA DIFERENTE A 20.");
    years--;
} while (year > 25);