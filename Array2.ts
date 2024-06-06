console.clear();
let teclado = require(`prompt-sync`)();
let cont : number =0;
let meuArrayTre = new Array(3);
let total: number = 0;

do{
    meuArrayTre[cont]=parseInt(teclado(`Digite um número par: `));
    cont++;
}while(cont<6);

cont = 0;

do{
    total += meuArrayTre[cont];
    cont ++;
}while(cont <=5);

console.log(total);