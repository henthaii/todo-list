// This will add any Todo to a Project

// This violates SRP but good enough for now

import { Todo } from "./class-todos.js"
import { mainTodo } from "./main-todo-array.js";


function addTodoToArray(title,description,dueDate,priority) {
    const newTodo = new Todo(title,description,dueDate,priority);
    mainTodo.push(newTodo);
}

export {addTodoToArray}