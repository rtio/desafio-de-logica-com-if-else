const prompt = require('prompt-sync')();

const numero1 = parseFloat(prompt('Digite o primeiro número: '));
const numero2 = parseFloat(prompt('Digite o segundo número: '));
const operacao = prompt('Digite a operação desejada: ');

function calcula() {
  if (operacao === '+') {
    return numero1 + numero2;
  } else if (operacao === '-') {
    return numero1 - numero2;
  } else if (operacao === '*') {
    return numero1 * numero2;
  } else if (operacao === '/') {
    return numero1 / numero2;
  } else {
    return 'Operação inválida!';
  };
};

const resultado = calcula();
console.log(`Resultado: ${numero1} ${operacao} ${numero2} = ${resultado}`);

