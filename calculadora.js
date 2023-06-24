// Soma dois números
function soma(num1, num2) {
    return num1 + num2;
}

// Subtrai dois números
function subtracao(num1, num2) {
    return num1 - num2;
}

// Multiplica dois números
function multiplicacao(num1, num2) {
    return num1 * num2;
}

// Divide dois números
function divisao(num1, num2) {
    return num1 / num2;
}

// Gera a saida de texto
function geraSaida(num1, num2, resultado, operacao) {
    return `O resultado de ${num1} ${operacao} ${num2} é: ${resultado}`;
}

// Calcula o resultado de acordo com a operação informada
function calcula(num1, num2, operacao) {
    switch (operacao) {
        case '+':
            return soma(num1, num2);
        case '-':
            return subtracao(num1, num2);
        case '*':
            return multiplicacao(num1, num2);
        case '/':
            return divisao(num1, num2);
    }
}

function principal() {
    // Cria um prompt para entrada de dados
    const prompt = require('prompt-sync')();

    // Captura a operação desejada
    const operacao = prompt('Informe a operação desejada (+, -, *, /): ');

    // Captura os números
    const num1 = Number(prompt('Informe o primeiro número: '));
    const num2 = Number(prompt('Informe o segundo número: '));

    // Calcula o resultado
    const resultado = calcula(num1, num2, operacao);

    // Gera a saida de texto
    const saidaDeTexto = geraSaida(num1, num2, resultado, operacao);

    // Imprime o resultado
    console.log(saidaDeTexto);
}

// Roda o programa
principal();
