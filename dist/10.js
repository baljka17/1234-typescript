"use strict";
let pc1 = {
    name: "iMac",
    year: 2022,
    hdd: [333]
};
let pc2 = {
    name: "AA",
    year: 2222,
    hdd: [22, "TB", true]
};
let x;
x = ["male", 33, { x: 300, units: ["GB", "TB"] }];
// === Enum
const SUPER_ADMIN = 1; // ???
var Enum_Units;
(function (Enum_Units) {
    Enum_Units[Enum_Units["MB"] = 0] = "MB";
    Enum_Units[Enum_Units["GB"] = 1] = "GB";
    Enum_Units[Enum_Units["TB"] = 2] = "TB";
})(Enum_Units || (Enum_Units = {}));
Enum_Units.GB;
Enum_Units.MB;
Enum_Units.TB;
// === Any
let odd = 1;
odd = "odd";
odd = true;
odd = 33;
let json = '{"x": 200, "y":1129}';
const response = JSON.parse(json);
console.log(response);
// === Unknown
let u = [];
if (typeof u[0] === 'function') {
    u[0];
}
let b1 = {
    name: "B1",
    add: (a, b) => console.log(a + b)
};
b1.add(3, 11);
// === never
let n;
const hello = () => {
    throw new Error();
    console.log('aaa'); // never
};
function area(shape) {
    if (shape.type == 'square') {
        console.log("this is square");
        return;
    }
    else if (shape.type == 'rectangle') {
        console.log("this is rectangle");
        return;
    }
    const thisIsNotAShape = shape; // never
}
const infinite = () => {
    while (true) { }
};
// === param destructure
function log(obj) {
    console.log(obj.name);
    console.log(obj.age);
}
function logDestructure({ name, age }) {
    console.log(name);
    console.log(age);
}
logDestructure({ name: "John Doe", age: 33 });
const p1 = {
    cpu: 33,
    ram: 777,
    brand: "Samsung",
    serial: "88-237373",
    digit: 99332211,
    imei: "8898-222-3333"
};
