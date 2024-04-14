#! /usr/bin/env node
import inquirer from "inquirer"
let todos = [];
console.log (`\t"Welcome to Todo List"`);
let condition = true;

while(condition){
let addTask = await inquirer.prompt(
    [ 
{
    name: "addQuestion2",
    type: "list",
    message: "What you want to do in your todos?",
    choices: ["Add", "view", "delete", "exit"]
}
]
)
if(addTask.addQuestion2 === "Add"){
    let addMore = await inquirer.prompt([{
        name: "add",
        type: "input",
        message: "What you want to add?",
        validate: function (input) {
            if (input.trim() == "") {
                return "Please enter a non empty item.";
            }
            return true;
        }
    }])
    todos.push(addMore.add);
    console.log(todos);
}
else if (addTask.addQuestion2 === "view"){
    console.log(todos);
}else if (addTask.addQuestion2 === "delete"){
    if(todos.length === 0){
        console.log("No task to delete");
    }else {
        todos.pop();
        console.log("Last task deleted sucessfully");
        console.log(todos)
    }
    }else if (addTask.addQuestion2 === "exit"){
        console.log("Existing from program")
        break;
    }
}