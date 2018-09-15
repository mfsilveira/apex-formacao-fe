let damage = 0;
let health = 0;

increaseHealth(5);
increaseHealth(5);
increaseDamage(20);

console.log(isGoingToKill());

return;

function increaseDamage(amount) {
    damage += amount;
}

function increaseHealth(amount) {
    health += amount;
}

function isGoingToKill() {
    return damage > health;
}