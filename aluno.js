const prompt = require('prompt-sync')();

const name = prompt('Digite seu nome: ');

const nota = prompt(`${name}, insira sua nota: `);

if (nota >= 7) {
    console.log('APROVADO!');
} else if (nota < 5) {
    console.log('REPROVADO!');
} else {
    console.log('RECUPERAÇÃO!');
};