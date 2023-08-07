"use strict";
let coordinatess = { x: 1, y: 2 };
coordinatess = { lat: 1234.2345, long: 4567.8912 };
const unionFunctions = function (cor) {
    if (typeof cor === "string") {
        console.log(`you are at an age(string) ${cor}`);
    }
    else if (typeof cor === "number") {
        console.log(`you are at an age(number) ${cor}`);
    }
    console.log(`you are at an age ${cor}`);
};
unionFunctions("1");
unionFunctions(1);
//Union types and arrays:
const letArray = [1, 2, 3];
const letStringArray = ["sai", "krish"];
const letArrayAnother = [1, 2, 3];
const letNumberArrayStringOnly = [1, 2, 3];
