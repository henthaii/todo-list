// This will handle coordinating and modal event
// interactions

import {getTodoName, updateTodoInArray} from "./todo-component.js"
import {newTodo, renderAllTodos} from "./todo-DOM.js"

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
    document.body.addEventListener("click", (event) => {
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

function renderEditTodo(projectCard, projectId, todo) {
    if (!projectCard) return;
    
    const editTodoElement = newTodo();
    projectCard.appendChild(editTodoElement);
    
    const form = editTodoElement.querySelector(".todo-form");
    const dialog = editTodoElement.querySelector('.todo-dialog');
    const cancelButton = editTodoElement.querySelector('.cancel');
    const cancelXButton = editTodoElement.querySelector('.cancel-x');
    
    form.querySelector('#title').value = todo.title;
    form.querySelector('#description').value = todo.description;
    form.querySelector('#due-date').value = todo.dueDate;
    form.querySelector('[name="priority"]').value = todo.priority.toLowerCase();
    
    dialog.showModal();
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        
        updateTodoInArray(
            projectId,
            todo.id,
            formData.get("title"),
            formData.get("description"),
            formData.get("due-date"),
            formData.get("priority")
        );
        
        renderAllTodos(projectCard, projectId);
        dialog.close();
        editTodoElement.remove();
    });
    
    const closeForm = () => { dialog.close(); editTodoElement.remove(); };
    cancelButton.addEventListener('click', closeForm);
    cancelXButton.addEventListener('click', closeForm);
}

export {todoSubmit, renderNewTodo, clickingNewTodo, renderEditTodo};