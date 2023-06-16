const prompt = require('prompt-sync')();

let num1 = parseFloat(prompt('Digite o primeiro número: '));
let num2 = parseFloat(prompt('Digite o segundo número: '));
let num3 = parseFloat(prompt('Digite o terceiro número: '));

let aux = num1;

if(num2 < num1) {
    aux=num2;
    num2=num1;
    num1=aux;
} if(num3 < num1) {
    aux=num3;
    num3=num1;
    num1=aux;
} if(num3 < num2) {
    aux=num3;
    num3=num2;
    num2=aux;
};

console.log(num1, num2, num3);