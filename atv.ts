console.clear();
const teclado = require(`prompt-sync`)();

let array1: number [] = new Array (10); //10 é o tanto de índice

for (let x = 1; x <= 10; x++){
    array1[x] = parseInt(teclado(`Digite um número: `)); //digitar número
}

for (let y = 1; y <= 10; y++){
    console.log (`o número ${y} é ${array1[y]}` ); //mostrar o número
}

console.log(array1); //mostrar todos os números juntos
