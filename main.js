const calculadora = require('./calculadora.js');
const idade = require('./idade.js');
const prompt = require('prompt-sync')({sigint: true});

function mostrarMenu(){
    console.log('+--------------------------------------+');
    console.log('|      Bem vindo ao menu principal!    |');
    console.log('+--------------------------------------+\n');

    console.log('Escolha uma opção para iniciar um dos programas disponíveis:\n');
    console.log('1 - Calculadora');
    console.log('2 - Verificador de idade');
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
        case '0':
            console.log('Saindo 👋...');
            condicao = false;
            break;
        default:
            console.log('Opção inválida!');
    }
} while (condicao);

// Temos um bug! O usuário ao finalizar a execução de um dos programas ao invés de ser
// questionado se deseja finalizar o programa o menu é exibido novamente. Corrija o bug!
// O comportamento esperado é que o usuário seja questionado se deseja finalizar o programa
// ao finalizar a execução de um dos programas.
// Boa sorte.

// calculadora.principal();
