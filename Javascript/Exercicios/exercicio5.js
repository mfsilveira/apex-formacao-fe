const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let votos1 = 0;
let votos2 = 0;

askVote();

function askVote() {
    rl.question('Esta é a sua urna eletrônica\n\nInforme seu voto:\n1 - José - Partido da Felicidade\n2 - João - Partido da Esperança\n-1 - Encerramento da Votação\n', (entrada) => {
        switch (entrada) {
            case "1":
                votos1++;
                askVote();
                break;
            case "2":
                votos2++;
                askVote();
                break;
            case "-1":
                console.log(`\nVotos Recebidos:\n1 - José - Partido da Felicidade: ${votos1} votos \n2 - João - Partido da Esperança: ${votos2} votos`);
                rl.close();
                break;
            default:
                console.log("Opção inválida");
                break;

        }
    })
}