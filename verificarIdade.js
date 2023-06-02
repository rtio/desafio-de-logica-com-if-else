// 1. **Verificar a idade**: Crie um programa que peça ao usuário para inserir a sua idade e informe se o usuário é menor de idade (menos de 18 anos) ou maior de idade (18 anos ou mais).

const prompt = require('prompt-sync')()

const idade = prompt('Qual a sua idade? ')
console.log(`Você tem ${idade} anos.`)

if (idade >= 18) {
    console.log(`Você ja é maior de idade.`)
} else {
    console.log(`Você ainda é menor de idade.`)
}