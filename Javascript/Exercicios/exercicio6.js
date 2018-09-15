const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

askTemperatureInFahrenheit();

function askTemperatureInFahrenheit(){
    rl.question('Informe a temperatura em Fahrenheit: ', (entrada) => {
        console.log(convertToCelsius(Number(entrada)));
        rl.close();
    })
}

function convertToCelsius(temperature) {
    return (((temperature - 32 ) * 5 ) / 9)
}