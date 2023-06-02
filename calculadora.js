// 2. **Calculadora básica**: Crie uma calculadora básica, onde o usuário fornece dois números e a operação que deseja realizar (adição, subtração, multiplicação, divisão). Use if e else para determinar a operação a ser realizada.

const prompt = require('prompt-sync')()

const numero1 = Number(prompt('Primeiro número? '))
const numero2 = Number(prompt('Segundo número? '))

console.log(`1 - Adição
2 - Subtração
3 - Multiplicação
4 - Divisão`)
const escolha = prompt('Escolha uma opção (1, 2 , 3  ou 4): ')
let resultado = 0

if (escolha == 1) {
    resultado = numero1 + numero2
} else if (escolha == 2) {
    resultado = numero1 - numero2
}  else if (escolha == 3) {
    resultado = numero1 * numero2
}  else if (escolha == 4) {
    resultado = numero1 / numero2
} else {
    resultado = 'Número Inválido'
}

console.log(resultado)
