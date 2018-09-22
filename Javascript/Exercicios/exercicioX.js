class Carta {
    constructor(card, suit) {
        this.card = card;
        this.suit = suit;
    };

    show() {
        console.log(`${this.card} de ${this.suit}`);
        return;
    }
}

let carta1 = new Carta("A", "paus");
let carta2 = new Carta("10", "copas");
let carta3 = new Carta("7", "ouro");

carta1.show();
carta2.show();
carta3.show();

return;