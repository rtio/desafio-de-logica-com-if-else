const listaNomesAluno = ["João", "Maria", "José", "Ana", "Pedro", "Elisa", "Carlos"];

// FOR
for (let i = 0; i < listaNomesAluno.length; i++) {
    const item = listaNomesAluno[i];
    console.log(`Aluno: ${item}`);
}

console.log('---------------------');

// ES5
function imprimeAluno(nomeAluno) {
    console.log(`Aluno: ${nomeAluno}`);
}
listaNomesAluno.forEach(imprimeAluno);

console.log('---------------------');

// ES5 - função anônima
listaNomesAluno.forEach(function(nomeAluno) {
    console.log(`Aluno: ${nomeAluno}`);
});

console.log('---------------------');

// ES6 - arrow function
listaNomesAluno.forEach(nomeAluno => {
    console.log(`Aluno: ${nomeAluno}`);
});

console.log('---------------------');

// ES6 - arrow function
listaNomesAluno.forEach(nomeAluno => console.log(`Aluno: ${nomeAluno}`));

console.log('---------------------');

const listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

listaNumeros.forEach((numero, index) => {
    if (index % 2 === 0) {
        console.log(`Indice: ${index} - Número: ${numero}`);
    }
});
