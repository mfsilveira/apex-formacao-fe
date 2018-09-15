const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let operacao;
let value1;
let value2;

askOperation();

function askOperation() {
    rl.question('Escolha a opção:\nA- Soma de 2 números.\nB- Diferença entre 2 números (maior pelo menor).\nC- Produto entre 2 números.\nD- Divisão entre 2 números (o denominador não pode ser zero).\n', (entrada) => {
        operacao = entrada;
        askNumber1();
    })
}

function askNumber1() {
    rl.question('Informe o primeiro número: ', (entrada) => {
        value1 = Number(entrada);
        askNumber2();
    })
}

function askNumber2() {
    rl.question('Informe o segundo número: ', (entrada) => {
        value2 = Number(entrada);
        showResult();
    })
}

function showResult() {
    switch (operacao.toUpperCase()) {
        case 'A':
            console.log((value1 + value2));
            break;
        case 'B':
            console.log((value1 > value2 ? value1 : value2) - (value1 < value2 ? value1 : value2));
            break;
        case 'C':
            console.log((value1 * value2));
            break;
        case 'D':
            console.log(value2 == 0 ? "denominador não pode ser zero" : (value1 / value2));
            break;
        default:
            console.log('Opção inválida');
            break;
    }
    rl.close();
}