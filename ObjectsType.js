// Here it's the object type that's been forwarded to functions as arguments.
var userObejct = {
    userName: "sai",
    userEntryPassword: 1234
};
function printName(person) {
    console.log("".concat(person.userName, " is userName and ").concat(person.userEntryPassword, " is the password"));
}
printName(userObejct);
