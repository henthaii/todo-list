// This will take the DOM input and add it to HTML page.

import {newTodo} from "./new-todo.js"
import {todoSubmit} from "./todoSubmit.js"
import {mainTodo} from "./main-todo-array.js"

function renderNewTodo() {
    const todoContainer = document.querySelector(".project-main");
    const appendNewTodo = newTodo();
    todoContainer.appendChild(appendNewTodo);
    todoSubmit(appendNewTodo);
}

export {renderNewTodo};