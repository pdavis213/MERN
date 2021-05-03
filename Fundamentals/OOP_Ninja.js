class Ninja{
    constructor (name, health = 10, speed = 3, strength = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName() {
        console.log(this.name);
    }
    showStats(){
        console.log(this.health, this.speed, this.strength)
    }
    drinkSake(){
        this.health +=10;
    }
}
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();