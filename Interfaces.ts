interface Person {
    personName: string;
    personAge: number;
}

const wishThePerson = function(perons:Person){
    console.log(`Wishing the person ${perons.personName}on his birthday at age ${perons.personAge}`)
}

const user:Person = {personName:'raviPalli', personAge: 29};

wishThePerson(user);

// ReadOnly and optional interfaces

interface IndianPerson {
    readonly firstName: string;
    middleName: string;
    lastName?: string;
}

const indianPersonData = function(person:IndianPerson){
    console.log(`Wishing the person ${person.firstName} ${person.lastName}`)
}

const indianUser:IndianPerson = {
    firstName: "sai",
    middleName: "krishna"
}

// Interface with methods.

interface indianPersonWithMethods {
    firstName: string,
    lastName: string,
    personMethod(): string
}

const returnFullName = function(person: indianPersonWithMethods){
    console.log(person.personMethod());
}

const indianPersonWithMethodsConstant : indianPersonWithMethods = {
    firstName: "Hari",
    lastName: "krishna",
    personMethod:() => {
        return "Hari krishna";
    }
}

// Interface method parameters.

interface indianPersonWithMethodsParameters {
    firstName: string,
    lastName: string,
    personMethod(bornYear:number, currentYear:number): number
}

const indianPersonWithMethodsParameters : indianPersonWithMethodsParameters = {
    firstName: "Hari",
    lastName: "krishna",
    personMethod:(a, b) :number => {
        return (b - a);
    }
}

const getPersonAge = function(person: indianPersonWithMethodsParameters){
    return person.personMethod(1990, 2023);
}
