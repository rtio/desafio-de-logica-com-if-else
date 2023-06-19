const prompt = require('prompt-sync')();

const operacao = prompt('Informe a operação desejada (+,-): ');

const num1 = Number(prompt('Informe o primeiro número: '));

const num2 = Number(prompt('Informe o segundo número: '));

function calcula() {
    if (operacao === '+') {
        return `O resultado da soma é: ${num1 + num2}`;
    }
    
    if (operacao === '-') {
        const subtracao = num1 - num2;
        return 'O resultado da subtração é: ' + subtracao;
    }
}

const output = calcula();

console.log(output);