import {newTodo} from "./new-todo.js"

function addingTodo() {
    newTodo();
    console.log("Adding new to-do item.");
}

function clickingNewTodo() {
    const button = document.querySelector(".todo");
    button.addEventListener("click",addingTodo);
}

export {clickingNewTodo};