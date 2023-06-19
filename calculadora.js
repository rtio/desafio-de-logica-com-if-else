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

const prompt = require('prompt-sync')();

const numero1 = Number(prompt('Digite o primeiro número: '));
const numero2 = Number(prompt('Digite o segundo número: '));
const operacao = prompt('Digite a operação desejada: ');

function calcula() {
  if (operacao === '+') {
  const resultado = numero1 + numero2;
  return `O resultado da soma é: ${numero1 + numero2}`;
  } if (operacao === '-') {
  const subtracao = numero1 - numero2;
  return 'O resultado da subtração é: ' + subtracao;
  }
};

const output = calcula();
console.log(output);