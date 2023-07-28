"use strict";
exports.__esModule = true;
var validateTSfunctions = function (name, age, alive) {
    console.log("my name is ".concat(name, ", I am currently ").concat(alive, ", with age ").concat(age));
};
validateTSfunctions("sai", 28, true);
var functionWithDefaultParameter = function (name) {
    if (name === void 0) { name = "sai"; }
    console.log("my name is ".concat(name));
};
functionWithDefaultParameter();
