// This will handle coordinating and modal event
// interactions

import {getTodoName} from "./todo-component.js"
import {newTodo,renderAllTodos} from "./todo-DOM.js"

function todoSubmit(todoElement, projectCard, projectId) {
    const form = todoElement.querySelector(".todo-form");
    const dialog = todoElement.querySelector('.todo-dialog');
    const cancelButton = todoElement.querySelector('.cancel');
    const cancelXButton = todoElement.querySelector('.cancel-x');

    dialog.showModal();

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        getTodoName(form, projectId);
        renderAllTodos(projectCard, projectId);
        dialog.close();
        dialog.remove();
        todoElement.remove();
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

function renderNewTodo(projectCard, projectId) {
    if (!projectCard) return;
    const appendNewTodo = newTodo();
    projectCard.appendChild(appendNewTodo);
    todoSubmit(appendNewTodo, projectCard, projectId);
}

function clickingNewTodo() {
    // Attach a single listener to the body or a stable main container
    document.body.addEventListener("click", (event) => {
        // Check if the clicked element (or its closest ancestor) has the class 'todo'
        const todoButton = event.target.closest(".todo");
        if (todoButton) {
            const projectCard = todoButton.closest(".project-card")
            if (projectCard) {
                const projectId = projectCard.dataset.projectId;
                renderNewTodo(projectCard, projectId);
            };
            }
        });
}

export {todoSubmit, renderNewTodo, clickingNewTodo};