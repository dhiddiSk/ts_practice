"use strict";
// Here it's the object type that's been forwarded to functions as arguments.
const userObejct = {
    userName: "sai",
    userEntryPassword: 1234
};
function printName(person) {
    console.log(`${person.userName} is userName and ${person.userEntryPassword} is the password`);
}
printName(userObejct);
// return type of function with object type.
let coordinate = { x: 32, y: 43 };
function randomCordinate() {
    return { x: Math.random(), y: Math.random() };
}
