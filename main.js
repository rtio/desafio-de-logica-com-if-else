const calculadora = require('./calculadora.js');
const idade = require('./idade.js');
const nota = require('./nota.js');
const prompt = require('prompt-sync')({sigint: true});

function mostrarMenu(){
    console.log('+--------------------------------------+');
    console.log('|      Bem vindo ao menu principal!    |');
    console.log('+--------------------------------------+\n');

    console.log('Escolha uma opção para iniciar um dos programas disponíveis:\n');
    console.log('1 - Calculadora');
    console.log('2 - Verificador de idade');
    console.log('3 - Calculadora de notas');
    console.log('0 - Sair...');
}

let condicao = true;
do {
    mostrarMenu();
    const opcao = prompt('\nInforme a opção desejada: ');
    switch (opcao) {
        case '1':
            calculadora.principal();
            break;
        case '2':
            idade.principal();
            break;
        case '3':
            nota.principal();
            break;
        case '0':
            console.log('Saindo 👋...');
            condicao = false;
            return;
        default:
            console.log('Opção inválida!');
    }
    const continuar = prompt('\nDeseja continuar? (s/n): ');
    if (continuar === 'n') {
        console.log('Saindo 👋...');
        condicao = false;
    }
} while (condicao);
