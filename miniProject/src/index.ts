interface toDos {
    text : string;
}

//console.log("Hello World");
const btn = document.getElementById("btn")! as HTMLButtonElement;
const field = document.getElementById("todoinput")! as HTMLInputElement;
const form = document.querySelector("form");
const list = document.getElementById("todolist");

const todos: toDos[] = [];

// btn?.addEventListener("click", function(){
//     alert(field.value);
// })

form?.addEventListener("submit", function(e){
    e.preventDefault();
    const newLi = document.createElement("li");
    list?.append(field.value);
    const newTodo: toDos = {
        text: field.value
    }
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(newTodo));
    list?.append(newLi);
    field.value = '';
});
