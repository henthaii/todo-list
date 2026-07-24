// This will be the eventlistener for the submit button in the New Todo form.

import {getTodoName} from "./get-todo-name.js"
import { renderAllTodos } from "./render-all-todos.js";

function todoSubmit(todoElement) {
    const form = todoElement.querySelector(".todo-form");
    const container = todoElement.querySelector('h3');
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

export {todoSubmit};