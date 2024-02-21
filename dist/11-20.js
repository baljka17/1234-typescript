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
