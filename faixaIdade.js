// 5. **Faixa de idade**: Escreva um programa que solicite ao usuário o ano de nascimento e imprima a faixa etária na qual ele se encontra: "Criança" (idade < 13), "Adolescente" (idade >= 13 e idade < 18), "Adulto" (idade >= 18 e idade < 60), "Idoso" (idade >= 60).

const prompt = require('prompt-sync')()

const dataAtual = new Date();
const anoAtual = dataAtual. getFullYear();
const anoNasc = Number(prompt('Qual ano você nasceu? '))
const idade = anoAtual - anoNasc
let faixa = ''

if (idade >= 60) {
    faixa = 'Idoso'
} else if (idade >= 18 && idade < 60) {
    faixa = 'Adulto'
} else if (idade >= 13 && idade < 18) {
    faixa = 'Adolescente'
} else {
    faixa = 'Criança'
}

console.log(`Estamos no ano de ${anoAtual} e você tem ${idade} anos de idade.`)
console.log(`Você é um(a) ${faixa}`)
