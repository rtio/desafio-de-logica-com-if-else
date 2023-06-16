const prompt = require('prompt-sync')();

const anoDeNascimento = prompt('Digite seu ano de nascimento: ');

const anoAtual = 2023;
const crianca = 13;
const adolescente = 18;
const adulto = 60;

if (anoDeNascimento > (anoAtual - crianca)) {
    console.log('Criança 🍼');
} else if (anoDeNascimento > (anoAtual - adolescente)) {
    console.log('Adolescente 💣');
} else if (anoDeNascimento > (anoAtual - adulto)) {
    console.log('Adulto 💸');
} else if (anoDeNascimento <= (anoAtual - adulto)) {
    console.log('Idoso 👴');
} else {
    console.log('Escreva um ano de nascimento válido!')
};