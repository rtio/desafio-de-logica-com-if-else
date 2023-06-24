const prompt = require('prompt-sync')();

const idadeInput = prompt('Informe sua idade: ');

function verificaIdade(idade) {
    if (idade < 0.1) {
        return 'Entrada inválida!';
    }

    if (idade < 18) {
        return 'Você é menor de idade!';
    }

    if (idade < 65) {
        return 'Você é maior de idade!';
    }

    return 'Você é idoso!';
}

const output = verificaIdade(idadeInput);

console.log(output);
