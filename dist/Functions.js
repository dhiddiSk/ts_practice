"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validateTSfunctions = function (name, age, alive) {
    console.log(`my name is ${name}, I am currently ${alive}, with age ${age}`);
    return alive;
};
validateTSfunctions("sai", 28, true);
const functionWithDefaultParameter = function (name = "sai") {
    console.log(`my name is ${name}`);
};
functionWithDefaultParameter();
