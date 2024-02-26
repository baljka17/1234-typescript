"use strict";
class Computer {
    constructor(color) {
        this.brand = "alienware";
        this.cpu = 3.4;
        this.color = color;
        this.start();
    }
    start() {
        console.log(this.color + ' computer has been started');
    }
}
const p21 = new Computer("Gray");
// console.log(p21);
const p21a = new Computer("Orange");
// console.log(p21a);
// ===
class Laptop extends Computer {
    constructor(color) {
        super(color);
    }
    charge() {
        console.log(this.color + " has being charged");
    }
}
const l21 = new Laptop("Reddish");
l21.start();
// ===
class Class23 {
    constructor(name) {
        this.brand = "MyBrand";
        this.name = name;
        console.log(this.brand); // private access local only
    }
}
// ===
const p24 = new Computer("AA");
// ===
class P26 {
    constructor(brand, _color, cpu) {
        this.brand = brand;
        this._color = _color;
        this.cpu = cpu;
    }
    get color() {
        return this.color;
    }
    set color(color) {
        this._color = color;
    }
    start() {
        console.log(this.color + " is here");
    }
}
// === static
console.log(Math.PI + Math.sqrt(4));
class P27 {
    constructor() {
        P27._count += 1;
    }
    get count() {
        return P27._count;
    }
    static start() {
        console.log("I am a static function");
    }
}
P27._count = 0;
const p27_instance = new P27();
const p27_instance_1 = new P27();
const p27_instance_2 = new P27();
console.log(P27._count);
P27.start();
class Gadget {
    constructor() {
        this.name = "A gadget";
    }
    broke() {
        console.log("Break apart");
    }
}
class SmartWatch extends Gadget {
    evdreh(speed) {
        console.log("Could not strat in " + speed + " seconds");
    }
}
// type sphone = Phone & Sim;
class Phone28 {
    constructor() {
        this.brand = 'samsung';
        this.sim = {
            numb: "99303030",
            operator: "ondo"
        };
        this.custom = "original";
    }
    save(num) {
        console.log(num + " number saved");
        return true;
    }
    ;
}
const p281 = new Phone28();
p281.save('99229922');
class People {
    constructor(weight, iq, health) {
        this.weight = weight;
        this.iq = iq;
        this.health = health;
    }
}
