const prompt = require('prompt-sync')();

let numeroUm = Number(prompt('Digite o primeiro número: '));
let numeroDois = Number(prompt('Digite o segundo número: '));
let numeroTres = Number(prompt('Digite o terceiro número: '));

let aux = 0;

if (numeroUm < numeroTres){
    aux = numeroUm;
    numeroUm = numeroTres;
    numeroTres = aux;
};
if (numeroUm < numeroDois){
    aux = numeroUm;
    numeroUm = numeroDois;
    numeroDois = aux;
}
if (numeroDois < numeroTres){
    aux = numeroDois;
    numeroDois = numeroTres;
    numeroTres = aux;
}

console.log(numeroUm, numeroDois, numeroTres);