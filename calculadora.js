const prompt = require('prompt-sync')();

console.log("Calculadora:");
const numeroUm = Number(prompt('Digite o primeiro número:  '));
const numeroDois = Number(prompt('Digite o segundo número: '));
const operador = prompt('Digite a operação desejada: ');

const soma = numeroUm + numeroDois;
const subtracao = numeroUm - numeroDois;
const multiplicacao = numeroUm * numeroDois;
const divisao = numeroUm / numeroDois;

if (operador == '+'){
    console.log(`${numeroUm} + ${numeroDois} = ${soma}`);
}else if (operador == '-') {
    console.log(`${numeroUm} - ${numeroDois} = ${subtracao}`);
}else if (operador == '*'){
    console.log(`${numeroUm} * ${numeroDois} = ${multiplicacao}`);
}else if (operador == '/'){
    console.log(`${numeroUm} / ${numeroDois} = ${divisao}`);
}else{
    console.log(`"${operador}" não é um operador válido! Por favor digite um dos seguintes operadores: +, -, * ou /`);
};