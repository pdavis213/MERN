class Player {
    constructor(name) {
        this.name = name;
    }
}
class ninjaCards extends Player {
    constructor(name, mana = 10, power = 0, resilience = 0, cost = 0) {
        super(name);
        this.mana = mana;
        this.power = power;
        this.resilience = resilience;
        this.cost = cost;
    }
    redBeltNinja() {
        this.cost = 3
        if (this.mana >= this.mana - this.cost) {
            this.mana -= this.cost;
            this.power += 3;
            this.resilience += 4;
            console.log(`${this.name} used the Red Belt Ninja Card`);
        } else {
            console.log('Not Enough Mana!');
        }
    }
    blackBeltNinja() {
        this.cost = 4
        if (this.mana >= this.mana - this.cost) {
            this.mana -= this.cost;
            this.power += 5;
            this.resilience += 4;
            console.log(`${this.name} used the Black Belt Ninja Card`);
        } else {
            console.log('Not Enough Mana!');
        }
    }
}
class ninjasCard extends ninjaCards {
    constructor(name) {
        super(name, 10, 0, 0, 0)
    }
    hardAlgorithm() {
        this.cost = 2;
        if (this.mana >= this.mana - this.cost) {
            this.mana -= this.cost;
            this.resilience += 3;
            console.log(`${this.name} healed themselves with a Hard Algo and increased their resilience by 3!`)
        } else {
            console.log('Not Enough Mana!');
        }
    }
    unhandledPromiseRejection(target) {
        this.cost = 1;
        if (this.mana >= this.mana - this.cost) {
            this.mana -= this.cost;
            target.resilience -= 2;
            console.log(`${this.name} attacked ${target.name} with Unhandled Promise Rejection attack and decreased their resilience by 2!`)
        } else {
            console.log('Not Enough Mana!');
        }
    }
    pairProgramming() {
        this.cost = 3;
        if (this.mana >= this.mana - this.cost) {
            this.mana -= this.cost;
            this.power += 2;
            console.log(`${this.name} called a friend to Pair Program and increased their attack power by 2!`)
        } else {
            console.log('Not Enough Mana!');
        }
    }
    attack(target) {
        target.res -= this.power;
        console.log(`${this.name} attacked ${target.name} dealing ${this.power} damage!`)
        if (target.resilience > this.power) {
            console.log(`${target.name} has ${target.resilience} health remaining..`)
        } else {
            console.log(`${this.name} believed in the heart of the cards! ${target.name} has been defeated!`)
        }
    }
}

const player1 = new ninjasCard("Yugi");
console.log(player1);
player1.redBeltNinja();
console.log(player1);

player1.hardAlgorithm();
console.log(player1);

const player2 = new ninjasCard("Kaiba");
console.log(player2);
player2.blackBeltNinja();
console.log(player2);

player2.unhandledPromiseRejection(player1);
console.log(player1);

player1.pairProgramming();
console.log(player1);

player1.attack(player2);