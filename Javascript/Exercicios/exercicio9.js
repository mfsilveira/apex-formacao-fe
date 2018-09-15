console.log(limitaPosicao('A'));
console.log(limitaPosicao(0));
console.log(limitaPosicao(-20));
console.log(limitaPosicao(42));
console.log(limitaPosicao(89));
console.log(limitaPosicao(111));
return;

function limitaPosicao(posicao) {
    if (!isNumber(posicao) || posicao < 0)
        return 0;
    else if (posicao > 100)
        return 100;
    else
        return posicao;
}

function isNumber(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}