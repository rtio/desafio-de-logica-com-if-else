function calculaMedia(listaDeNotas) {
    let somaTotal = 0;
    listaDeNotas.forEach(nota => {
        somaTotal += nota;
    });
    media = somaTotal / listaDeNotas.length;
    return media;
}

function textoResultado(mediaDoAluno) {
    const MEDIA = 7;
    const NOTA_MINIMA_RECUPERACAO = 5;

    if (mediaDoAluno >= MEDIA) {
        return 'Aprovado!';
    } else if (mediaDoAluno < NOTA_MINIMA_RECUPERACAO) {
        return 'Reprovado!';
    } else {
        return 'Recuperação!';
    }
}

function textMediaAluno(nomeAluno, mediaDoAluno) {
    return `O aluno ${nomeAluno} ficou com média: ${mediaDoAluno} `;
}

function principal() {
    const prompt = require('prompt-sync')();
    
    const nomeAluno = prompt('Digite o nome do aluno: ');
    
    let listaDeNotas = [];

    const numeroDeNotas = prompt('Digite o número de notas a serem calculadas: ');

    for (let i = 0; i < numeroDeNotas; i++) {
        const nota = Number(prompt('Digite a nota: '));
        listaDeNotas.push(nota);
    }

    const nota = calculaMedia(listaDeNotas);
    const textoMedia = textMediaAluno(nomeAluno, nota);
    const resultado = textoResultado(nota);
    
    console.log(textoMedia);
    console.log(resultado);
}

module.exports = {
    principal
}
