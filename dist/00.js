"use strict";
function getCarId(car) {
    return car.title;
}
const car1 = {
    id: 1,
    brand: "Toyoga",
    title: "Land Cruiser",
    price: 1200000
};
console.log(getCarId(car1));
// ====
const phone = "123412341234";
console.log(phone);
// ====
let movie = "Dangerous!"; // interence
function add(a, b) {
    return a + b;
}
// ===
const value = 3;
const variation = 5;
const multi = "odd"; // !even
let moon = {
    x: 300,
    y: 200,
    color: "gray"
};
let bullEye = {
    x: 100,
    y: 220,
    color: "red"
};
function printPosition(pt) {
    console.log("x:" + pt.x);
    console.log("y:" + pt.y);
}
printPosition(bullEye);
// === array
let arr1 = [];
arr1.push("asdf");
arr1.push("asdf");
let arr2 = ["string"]; // auto type detect
let arr3 = []; // multi types
arr3.push("hola");
arr3.push(false);
arr3.push(true);
let days = ["monday", "tuesday", "wed"];
let someDays = ["monday", "tuesday", "wed"];
let businessDays = ["mon", "t", "w"];
