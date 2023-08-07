var coordinatess = { x: 1, y: 2 };
coordinatess = { lat: 1234.2345, long: 4567.8912 };
var unionFunctions = function (cor) {
    if (typeof cor === "string") {
        console.log("you are at an age(string) ".concat(cor));
    }
    else if (typeof cor === "number") {
        console.log("you are at an age(number) ".concat(cor));
    }
    console.log("you are at an age ".concat(cor));
};
unionFunctions("1");
unionFunctions(1);
