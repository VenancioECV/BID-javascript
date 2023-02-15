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

class sensei extends Ninja {
    constructor(sabiduria){
        super(sabiduria);
        this.salud= 200;  
        this.fuerza = 10;
        this.velocidad = 10;
        this.sabiduria= 10;
        }
    speakWisdom(){
        this.drinkSake();
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses")
    }
}

const superSensei = new sensei ("Master Splinter");
superSensei.showStats();
superSensei.speakWisdom();
superSensei.showStats();