// A type Alias
type Person = {
    nameOfPerson : "kkr",
    age : 80
};

const theHappyPerson = function(p1:Person) : Person{
    return {nameOfPerson: p1.nameOfPerson, age :p1.age};
}


// Optional object properties.

type people = {
    population : number,
    numberOfTypes : number,
    malePopulation? : number
}

const peopleCalc = function(pp: people){
    console.log(pp.population);
    console.log(pp.numberOfTypes);
}
peopleCalc({population:10000, numberOfTypes:8})

// The typescript readonly keyword

type User = {
    readonly id: number,
    name: string
}

const user : User = {
    id : 1234,
    name: "sai"
}
