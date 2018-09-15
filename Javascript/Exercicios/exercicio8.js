let bagItems = new Array();

bagItems.push("caneta");
bagItems.push("computador");
bagItems.push("coca-cola");
bagItems.push("chave");
bagItems.push("chaveiro");

console.log(hasKey());
return;

function hasKey() {
    for (let bagItem of bagItems) {
        if (String(bagItem).toUpperCase() == "CHAVE")
            return true;
    }
    return false;
}