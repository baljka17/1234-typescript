type Pc = {
  name: string;
  year: number;
  hdd: (number | string)[]
}
let pc1: Pc = {
  name: "iMac",
  year: 2022,
  hdd: [333]
}

// === Tuple
type Unit = "MB" | "GB" | "TB";
type Tuplee = {
  name: string;
  year: number;
  hdd: [number, Unit, boolean]
}

let pc2: Tuplee = {
  name: "AA",
  year: 2222,
  hdd: [22, "TB", true]
}
let x: ["male" | "female", number, { x: number, units: Unit[] }];
x = ["male", 33, { x: 300, units: ["GB", "TB"] }];

// === Enum
const SUPER_ADMIN = 1; // ???

enum Enum_Units {
  MB, GB, TB
}
Enum_Units.GB
Enum_Units.MB
Enum_Units.TB

// === Any
let odd: any = 1;

odd = "odd";
odd = true;
odd = 33;

let json = '{"x": 200, "y":1129}';
const response = JSON.parse(json);
console.log(response);

// === Unknown
let u: unknown[] = [];

if (typeof u[0] === 'function') {
  u[0];
}

// === Void function
type Business = {
  name: string;
  add: (a: number, b: number) => void;
}

let b1: Business = {
  name: "B1",
  add: (a: number, b: number) => console.log(a + b)
}

b1.add(3, 11);

// === never
let n: never;

const hello = () => {
  throw new Error();
  console.log('aaa'); // never
}

type Square = {
  type: 'square';
  size: number;
}

type Rectangle = {
  type: 'rectangle';
  width: number;
  height: number;
}

type Shape = Square | Rectangle;
function area(shape: Shape) {
  if (shape.type == 'square') {
    console.log("this is square");
    return;
  } else if (shape.type == 'rectangle') {
    console.log("this is rectangle");
    return;
  }
  const thisIsNotAShape: never = shape; // never
}
const infinite = () => { // returns never
  while (true) { }
}

// === param destructure

function log(obj: { name: string, age: number }) {
  console.log(obj.name)
  console.log(obj.age)
}

function logDestructure({ name, age }: { name: string, age: number }) {
  console.log(name)
  console.log(age)
}

logDestructure({ name: "John Doe", age: 33 });

// === Type intersection

type Processor = {
  cpu: number;
  ram: number;
}
type Phone1 = {
  brand: string;
  serial: string;
}

type SmartPhone = Processor & Phone1 & {
  digit: number;
  readonly imei: string; // === Readonly
}

const p1: SmartPhone = {
  cpu: 33,
  ram: 777,
  brand: "Samsung",
  serial: "88-237373",
  digit: 99332211,
  imei: "8898-222-3333"
}