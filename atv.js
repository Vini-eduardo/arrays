console.clear();
var teclado = require("prompt-sync")();
var array1 = new Array(10); //10 é o tanto de índice
for (var x = 1; x <= 10; x++) {
    array1[x] = parseInt(teclado("Digite um n\u00FAmero: ")); //digitar número
}
for (var y = 1; y <= 10; y++) {
    console.log("o n\u00FAmero ".concat(y, " \u00E9 ").concat(array1[y])); //mostrar o número
}
console.log(array1); //mostrar todos os números juntos
