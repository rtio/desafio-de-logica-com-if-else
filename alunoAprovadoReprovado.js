// Verificar se um aluno foi aprovado ou reprovado**: Crie um programa que peça ao usuário para inserir a nota de um aluno, e então informe se o aluno foi aprovado (nota maior ou igual a 7), reprovado (nota menor que 7) ou está de exame final (nota entre 5 e 6.9).

const prompt = require('prompt-sync')()

const nota1 = Number(prompt('Primeira nota? '))
const nota2 = Number(prompt('Segunda nota nota? '))
const media = (nota1 + nota2)/2

console.log(`Sua primeira nota foi ${nota1} e sua segunda nota foi ${nota2}. Sua média é ${media}.`)

if (media >= 7) {
    console.log(`Você está APROVADO.`)
} else if (media >= 5 && media < 7) {
    console.log(`Você está de RECUPERAÇÃO.`)
} else {
    console.log(`Você está REPROVADO`)
}


