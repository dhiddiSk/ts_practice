"use strict";
const theHappyPerson = function (p1) {
    return { nameOfPerson: p1.nameOfPerson, age: p1.age };
};
const peopleCalc = function (pp) {
    console.log(pp.population);
    console.log(pp.numberOfTypes);
};
peopleCalc({ population: 10000, numberOfTypes: 8 });
const user = {
    id: 1234,
    name: "sai"
};
