#! /usr/bin/env node
import inquirer from "inquirer";
let todos = []; // shopper [] i.e array considers like a shopper
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "what do want to add in your todo?"
        },
        {
            name: "addMore",
            type: "confirm",
            message: "do you want to add more todo?",
            default: "true"
        }
    ]);
    todos.push(addTask.todo);
    // The loop is running on the basis of this variable condition.
    condition = addTask.addMore;
    console.log(todos);
}
// Home Work
// Read, Update, Delete, add  
