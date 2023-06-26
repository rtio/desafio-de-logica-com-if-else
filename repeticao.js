// While - Do While - For - ForEach

// O while é um laço de repetição que executa um bloco de código
// enquanto uma condição for verdadeira.
while (condition) {
    // code
}

// O do while é um laço de repetição que executa um bloco de código
// enquanto uma condição for verdadeira. A diferença entre o while e
// o do while é que o do while executa o bloco de código pelo menos
// uma vez.
do {
    // code
} while (condition);


// O for é um laço de repetição que executa um bloco de código enquanto
// uma condição for verdadeira. A diferença entre o while e o for é que
// o for é mais utilizado quando se sabe a quantidade de vezes que o
// bloco de código deve ser executado.
for (
    let index = 0;
    index < array.length;
    index++
) {
    const element = array[index];
    // code
}

// O foreach é um laço de repetição que executa um bloco de código para
// cada elemento de um array. O foreach é mais utilizado para percorrer
// arrays.
array.forEach(element => {
    // code
});