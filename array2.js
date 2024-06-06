console.clear();
var teclado = require("prompt-sync")();
var cont = 0;
var meuArrayTre = new Array(3);
var total = 0;
do {
    meuArrayTre[cont] = parseInt(teclado("Digite um n\u00FAmero par: "));
    cont++;
} while (cont < 6);
cont = 0;
do {
    total += meuArrayTre[cont];
    cont++;
} while (cont <= 5);
console.log(total);
