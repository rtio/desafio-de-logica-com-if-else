const prompt = require('prompt-sync')();

const idade = parseInt(prompt('Digite a sua idade: '));

if (idade < 13) {
    console.log(`Sua idade é ${idade} anos. Você é uma criança.`);
}else if (idade >= 13 && idade < 18){
    console.log(`Sua idade é ${idade} anos. Você é um adolescente.`);
}else if (idade >= 18 && idade < 60){
    console.log(`Sua idade é ${idade} anos. Você é um adulto.`);    
}else{
    console.log(`Sua idade é ${idade} anos. Você é um idoso.`);    
};