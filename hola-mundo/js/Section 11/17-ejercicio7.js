"use strict";

var factor = parseInt(prompt("Introduce el numero:", 1));
document.write("Tabla del " + factor + ":<br/>");

for (var i = 1; i <= 10; i++) {
    document.write(factor + " x " + i + " = " + i * factor + "<br/>")
}

document.write("<br/><br/>");
for (i = 1; i <= 10; i++) {
    document.write("Tabla del " + i + ":<br/>");
    for (var j = 1; j <= 10; j++) {
        document.write(i + " x " + j + " = " + i * j + "<br/>")
    }
    document.write("<br/><br/>");
}

