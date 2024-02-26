class Computer {
  color: string;
  brand = "alienware";
  cpu: number = 3.4;
  constructor(color: string) {
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
  constructor(color: string) { // Optional
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
  public name: string;
  private brand: string = "MyBrand";
  constructor(name: string) {
    this.name = name;
    console.log(this.brand); // private access local only
  }
}

// ===
const p24 = new Computer("AA");

// ===

class P26 {
  constructor(
    public brand: string,
    private _color: string,
    protected cpu: number
  ) { }

  get color() {
    return this.color;
  }
  set color(color: string) {
    this._color = color
  }

  start(this: P26) {
    console.log(this.color + " is here");
  }

}

// === static
console.log(Math.PI + Math.sqrt(4));

class P27 {
  static _count: number = 0;
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
const p27_instance = new P27();
const p27_instance_1 = new P27();
const p27_instance_2 = new P27();
console.log(P27._count);
P27.start();

abstract class Gadget {
  public name: string = "A gadget";
  broke() {
    console.log("Break apart");
  }

  abstract evdreh(speed: number): void;
}

class SmartWatch extends Gadget {
  evdreh(speed: number): void {
    console.log("Could not strat in " + speed + " seconds");
  }
}

// === 28 / Interface - buttsee zarlah, type - universal

interface Sim {
  numb: string;
  operator: string;
}

interface Phone {
  brand: string;
  sim: Sim;
  save(num: string): boolean;
}

// type sphone = Phone & Sim;

class Phone28 implements Phone {
  brand: string = 'samsung';

  sim: Sim = {
    numb: "99303030",
    operator: "ondo"
  }
  save(num: string): boolean {
    console.log(num + " number saved");
    return true;
  };
  custom: string = "original";
}

const p281 = new Phone28();
p281.save('99229922');

// ===
interface Animal {
  health: number;
}
interface Thing {
  weight: string;
}
interface Person extends Animal, Thing {
  iq: number;
}

class People implements Person {
  iq: number;
  health: number;
  weight: string;
  nickname?: string;
  constructor(
    weight: string,
    iq: number,
    health: number
  ) {
    this.weight = weight;
    this.iq = iq;
    this.health = health;
  }
}