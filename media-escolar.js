const prompt = require('prompt-sync')();

const notaUm = Number(prompt('Digite sua primeira nota: '));
const notaDois = Number(prompt('Digite sua segunda nota: '));

const media = (notaUm + notaDois) / 2 ;

if (media >= 7){
    console.log(`Sua média é : ${media}`);
    console.log("Você foi aprovado!");
}else if (media >= 5){
    console.log(`Sua média é : ${media}`);
    console.log("Você foi para Avaliação Final!");
}else{
    console.log(`Sua média é : ${media}`);
    console.log("Você foi reprovado.");
};