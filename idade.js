const prompt = require('prompt-sync')();

const idade = parseInt(prompt('Qual a sua idade? '));

if (idade >= 18){
    console.log("Você é maior de idade!");
}else{
    console.log("Você é menor de idade.")
};

