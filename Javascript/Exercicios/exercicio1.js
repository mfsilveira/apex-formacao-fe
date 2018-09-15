const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let valor1;
let valor2;

step1();

function step1() {
    rl.question('Informe o primeiro valor: ', (entrada) => {
        valor1 = entrada;
        step2();
    })
}

function step2() {
    rl.question('Informe o segundo valor: ', (entrada) => {
        valor2 = entrada;
        let total = soma(valor1, valor2);

        console.log(total > 100 ? total : 'Valor menor que 100.');
        rl.close();
    })
}

function soma(a, b) {
    return parseFloat(a) + parseFloat(b);
}