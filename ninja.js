class Ninja {
    constructor (nombre, salud) {
        this.nombre = nombre;
        this.salud= salud;
        this.velocidad = 3;
        this.fuerza = 3;
    }
    sayName(){
        console.log(`Mi nombre es ${this.nombre}`);
    }
    showStats(){
        console.log(`Stats: Nombre= ${this.nombre} - Salud = ${this.salud} - Velocidad = ${this.velocidad} - Fuerza: ${this.fuerza}`);
    }
    drinkSake(){
        this.salud+= 10;

    }
}
const ninjadou = new Ninja ("dou",10);
ninjadou.showStats();
ninjadou.drinkSake();
ninjadou.showStats();