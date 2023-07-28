const validateTSfunctions = function(name:string, age:number, alive:boolean): boolean{
    console.log(`my name is ${name}, I am currently ${alive}, with age ${age}`); 
    return alive; 
}
validateTSfunctions("sai", 28, true);

const functionWithDefaultParameter = function(name:string = "sai"){
    console.log(`my name is ${name}`)
}
functionWithDefaultParameter();

export{};
