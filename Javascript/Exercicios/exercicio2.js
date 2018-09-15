const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

askNumber();

function askNumber(){
    rl.question('Informe número para exibir a tabuada: ', (entrada) => {
        showTableOf(entrada);
        rl.close();
    })
}

function showTableOf(numberToUse)
{
    for(let i = 1; i <= 10; i ++)
    {
        console.log(numberToUse + " x " + i + " = " + (i * numberToUse));
    }
}