// This will handle coordinating and modal event
// interactions

import {getTodoName} from "./todo-component.js"
import {newTodo,renderAllTodos} from "./todo-DOM.js"

function todoSubmit(todoElement) {
    const form = todoElement.querySelector(".todo-form");
    const dialog = todoElement.querySelector('.todo-dialog');
    const cancelButton = todoElement.querySelector('.cancel');
    const cancelXButton = todoElement.querySelector('.cancel-x');

    dialog.showModal();

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        getTodoName(form);
        renderAllTodos();
        dialog.close();
        dialog.remove();
    });

    cancelButton.addEventListener('click', () => {
        dialog.close();
        todoElement.remove();
    });

    cancelXButton.addEventListener('click', () => {
        dialog.close();
        todoElement.remove();
    }); 

}

function renderNewTodo() {
    const todoContainer = document.querySelector(".project-main");
    const appendNewTodo = newTodo();
    todoContainer.appendChild(appendNewTodo);
    todoSubmit(appendNewTodo);
}

function clickingNewTodo() {
    const button = document.querySelectorAll(".todo");
    button.forEach(button => {
        button.addEventListener("click",renderNewTodo);
    console.log("Adding new todo.");
    });
}

export {todoSubmit, renderNewTodo, clickingNewTodo};