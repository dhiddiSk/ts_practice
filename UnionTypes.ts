type Point = {
    x: number;
    y: number;
};

type Loc = {
    lat: number;
    long: number;
};

let coordinatess : Point | Loc = {x:1, y:2};
coordinatess = {lat: 1234.2345, long: 4567.8912};


const unionFunctions = function(cor: number|string){
    if(typeof cor === "string"){
        console.log(`you are at an age(string) ${cor}`);
    }else if(typeof cor === "number"){
        console.log(`you are at an age(number) ${cor}`);
    }
    console.log(`you are at an age ${cor}`);
}

unionFunctions("1");
unionFunctions(1);


//Union types and arrays:

const letArray: (string|number)[] = [1, 2, 3];
const letStringArray: (string|number)[] = ["sai", "krish"];
const letArrayAnother: (string[]|number[]) = [1, 2, 3];
const letNumberArrayStringOnly: (number[]|string) = [1, 2, 3];
