// === Polymorphism

interface Animal {
  health: number;
  sound(): string;
}
interface Thing {
  weight: string;
}
interface Person extends Animal, Thing {
  iq: number;
}

class Dog implements Animal, Thing {
  health: number;
  weight: string;
  legs?: number;
  constructor(
    health: number,
    weight: string,
    legs?: number
  ) {
    this.health = health;
    this.weight = weight;
    this.legs = legs
  }
  sound(): string {
    return "Bark";
  }
}

class Bird implements Person {
  iq: number;
  health: number;
  weight: string;
  name?: string;
  constructor(
    weight: string,
    iq: number,
    health: number
  ) {
    this.weight = weight;
    this.iq = iq;
    this.health = health;
  }
  sound(): string {
    return "Chirp";
  }
}