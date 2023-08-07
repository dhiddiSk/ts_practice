"use strict";
const wishThePerson = function (perons) {
    console.log(`Wishing the person ${perons.personName}on his birthday at age ${perons.personAge}`);
};
const user = { personName: 'raviPalli', personAge: 29 };
wishThePerson(user);
const indianPersonData = function (person) {
    console.log(`Wishing the person ${person.firstName} ${person.lastName}`);
};
const indianUser = {
    firstName: "sai",
    middleName: "krishna"
};
const returnFullName = function (person) {
    console.log(person.personMethod());
};
const indianPersonWithMethodsConstant = {
    firstName: "Hari",
    lastName: "krishna",
    personMethod: () => {
        return "Hari krishna";
    }
};
const indianPersonWithMethodsParameters = {
    firstName: "Hari",
    lastName: "krishna",
    personMethod: (a, b) => {
        return (b - a);
    }
};
const getPersonAge = function (person) {
    return person.personMethod(1990, 2023);
};
