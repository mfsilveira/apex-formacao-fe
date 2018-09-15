const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numbers = new Array();

askNumber();

function askNumber() {
    rl.question(`Informe o número ${numbers.length}: `, (entrada) => {
        numbers.push(Number(entrada));
        if (numbers.length < 10)
            askNumber();
        else
        {
            rl.close();
            console.log(numbers.sort((a, b) => { return a > b }));
        }
            
    })
}
