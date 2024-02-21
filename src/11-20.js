var pc1 = {
    name: "iMac",
    year: 2022,
    hdd: [333]
};
var pc2 = {
    name: "AA",
    year: 2222,
    hdd: [22, "TB", true]
};
var x;
x = ["male", 33, { x: 300, units: ["GB", "TB"] }];
// === Enum
var SUPER_ADMIN = 1; // ???
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
var odd = 1;
odd = "odd";
odd = true;
odd = 33;
// === Unknown
var u = [];
if (typeof u[0] === 'function') {
    u[0];
}
var b1 = {
    name: "B1",
    add: function (a, b) { return console.log(a + b); }
};
b1.add(3, 11);
