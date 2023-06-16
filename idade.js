const prompt = require('prompt-sync')();

const idade = prompt('Digite sua idade: ');

const maiorIdade = 18;

if (idade < maiorIdade) {
    console.log('Você é menor de idade!');
} else {
    console.log('Você é maior de idade!');
};