// 4. **Classificar números**: Crie um programa que peça ao usuário para inserir três números diferentes e, em seguida, imprima os números em ordem crescente.

const prompt = require('prompt-sync')()

const num1 = prompt('Primeiro número? ')
const num2 = prompt('Segundo número? ')
const num3 = prompt('Terceiro número? ')

if (num1 >= num2 && num1 >= num3) {
    console.log(`O número ${num1} é o maior.`)
} else if (num2 >= num1 && num2 >= num3) {
    console.log(`O número ${num2} é o maior.`)
} else {
    console.log(`O número ${num3} é o maior.`)
}

if (num1 <= num2 && num1 <= num3) {
    console.log(`O número ${num1} é o menor.`)
} else if (num2 <= num1 && num2 <= num3) {
    console.log(`O número ${num2} é o menor.`)
} else {
    console.log(`O número ${num3} é o menor.`)
}