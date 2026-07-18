// This is the addEventListener logic for a todo.

import {renderNewTodo} from "./render-new-todo.js"

function clickingNewTodo() {
    const button = document.querySelector(".todo");
    if (button) {
        button.addEventListener("click",renderNewTodo);
        console.log("Adding new todo.");
    }
}

export {clickingNewTodo};