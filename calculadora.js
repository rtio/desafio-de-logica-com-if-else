// const prompt = require('prompt-sync')();

// const numero1 = parseFloat(prompt('Digite o primeiro número: '));
// const numero2 = parseFloat(prompt('Digite o segundo número: '));
// const operacao = prompt('Digite a operação desejada: ');

// function calcula() {
//   if (operacao === '+') {
//     return numero1 + numero2;
//   } else if (operacao === '-') {
//     return numero1 - numero2;
//   } else if (operacao === '*') {
//     return numero1 * numero2;
//   } else if (operacao === '/') {
//     return numero1 / numero2;
//   } else {
//     return 'Operação inválida!';
//   };
// };

// const resultado = calcula();
// console.log(`Resultado: ${numero1} ${operacao} ${numero2} = ${resultado}`);

//// FUNÇÃO 2 ////

/// Soma dois números
function soma(numero1, numero2) {
  return numero1 + numero2;
}

/// Subtrai dois números
function subtracao(numero1, numero2) {
  return numero1 - numero2;
}

/// Multiplica dois números
function multiplicacao(numero1, numero2) {
  return numero1 * numero2;
}

/// Divide dois números
function divisao(numero1, numero2) {
  return numero1 / numero2;
}

/// Gera a saída do texto
function geraSaida(numero1, numero2, resultado, operacao) {
  return `O resultado de ${numero1} ${operacao} ${numero2} é: ${resultado}`;
}

/// Calcula o resultado de acordo com a operação informada
function calcula(numero1, numero2, operacao) {
  switch (operacao) {
    case "+":
      return soma(numero1, numero2);
    case "-":
      return subtracao(numero1, numero2);
    case "*":
      return multiplicacao(numero1, numero2);
    case "/":
      return divisao(numero1, numero2);
  }
};

const output = calcula();
console.log(output);