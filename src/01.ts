interface Person1 {
  name: string;
  age: number;
}

type Car = {
  id: number;
  title: string;
  brand: string;
  price: number;
}

function getCarId(car: Car): string {
  return car.title;
}

const car1 = {
  id: 1,
  brand: "Toyoga",
  title: "Land Cruiser",
  price: 1200000
}

console.log(getCarId(car1));

// ====

const phone: string = "123412341234";

console.log(phone);

// ====

let movie = "Dangerous!"; // interence


function add(a: number, b: number) {
  return a + b;
}
// ===

const value: 3 = 3;
const variation: 3 | 4 | 5 = 5;
const multi: 3 | "three" | "odd" = "odd"; // !even

// === Object type
type Color = "red" | "green" | "blue" | "gray";

type Point = {
  x: number,
  y: number,
  color: Color
}

let moon: Point = {
  x: 300,
  y: 200,
  color: "gray"
}

let bullEye: Point = {
  x: 100,
  y: 220,
  color: "red"
}

function printPosition(pt: { x: number, y: number }) {
  console.log("x:" + pt.x)
  console.log("y:" + pt.y)
}

printPosition(bullEye);

// === array
let arr1 = [];
arr1.push("asdf");
arr1.push("asdf");

let arr2 = ["string"]; // auto type detect

let arr3: (string | boolean)[] = []; // multi types
arr3.push("hola");
arr3.push(false);
arr3.push(true);

let days = ["monday", "tuesday", "wed"];
let someDays: string[] = ["monday", "tuesday", "wed"];

let businessDays: ("mon" | "t" | "w" | "th" | "f" | string | "24/7")[] = ["mon", "t", "w"];
