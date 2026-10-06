import { log } from "node:console";
import { title } from "node:process";

const todos = [
    {
        id: 1,
        title: "Learn React",
        completed: false,
    },
    {
        id: 2,
        titled: "Learn Node",
        completed: true,
    },
    {
        id: 3,
        title: "Learn Express",
        completed: false,
    }
];
// const unfinishedTodos = todos.filter(t => !t.completed)
// console.log(unfinishedTodos);

// const finishTodos = todos.filter(t => t.completed)
// console.log(finishTodos);

// const emptyTodos = todos.filter(t => t.id ===10)
// console.log(emptyTodos);

const findTodoById = todos.find(t => t.id ==2)
console.log(findTodoById);

const findTodoByCompleted = todos.find(t => !t.completed)
console.log(findTodoByCompleted);
