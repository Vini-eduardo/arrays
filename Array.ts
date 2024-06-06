// array tipo number índice 0 1 2 3
let meuArrayUm : number [] = [12, 24, 20, 16];

//Array tipo string, indice
let meuArrayDois: string [] = [`Segunda-feira`, `Terça-feira`, `Quarta-feira` ];

//utilizando para criar um Array com dimensão definida/determinada
let meuArrayTres : number [] = new Array(3); //0-2

console.clear();
const teclado = require(`prompt-sync`)();
let cont: number = 0

do{
    meuArrayTres[cont] = parseInt(teclado(`Digite o número do índice ${cont}: `));
    cont++;
}while(cont < 3);

do{
    cont--;
    let total: number =+ meuArrayTres[cont];
}while(cont >= 0);