// Temporarily will host entire to-do logic. Will need to break down after

// to-do need to be a class?
// how do i fit in a class section
// how do i target specific div's to add the to-do's to
// will model after the new project
// Need to build the DOM, the dialog modal that will host form
// Need to pull data from form to put as container elements
// do i need to update the h2 as UL's as well
// add addeventlistener button logic
// appending logic to container will need to be a separate module

function newTodo() {
    const toDo = document.createElement('div');
    toDo.classList.add('todo-card');
    toDo.innerHTML = `
        <dialog class="todo-dialog">
            <form class="todo-form">
                <button type="button" class="cancel-x">x</button>
                <div class="label">
                    <label for="title">Title:</label>
                    <input type="text" name="title" id="title">
                </div>
                <div class="label">
                    <label for="description">Description:</label>
                    <input type="text" name="description" id="description">
                </div>
                <div class="label">
                    <label for="due-date">Due Date:</label>
                    <input type="text" name="due-date" id="due-date">
                </div>
                <div class="label">
                    <label for="priority">Priority:</label>
                    <select name="Priority">
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
                <button type="button" class="cancel">Cancel</button>
            </form>
        </dialog>
        <h3></h3>
    `;
    return toDo;
}

export {newTodo};

function getTodoName(formElement) {
    const formData = new FormData(formElement);
    return formData.get("title");
}

export {getTodoName}

import {getTodoName} from //insert file name here

function toDoSubmit(todoElement) {
    const form = todoElement.querySelector(".todo-form");
    const container = todoElement.querySelector('h3');
    const dialog = todoElement.querySelector('.todo-dialog');
    const cancelButton = todoElement.querySelector('.cancel');
    const cancelXButton = todoElement.querySelector('.cancel-x');

    dialog.showModal();

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        container.textContent = getTodoName(form);
        dialog.close();
        dialog.remove();
    });

    cancelButton.addEventListener('click', () => {
        dialog.close();
        todo.remove();
    });

    cancelXButton.addEventListener('click', () => {
        dialog.close();
        todo.remove();
    }); 

}

export {toDoSubmit};

import {newTodo} from //insert file name here
import {toDoSubmit} from //insert file name here

function renderNewTodo() {
    const todoContainer = document.querySelector(".container");
    const appendNewTodo = newTodo();
    todoContainer.appendChild(appendNewTodo);
    toDoSubmit(appendNewTodo);
}

export {renderNewTodo};

import {renderNewTodo} from //insert file name here

function addingTodo() {
    renderNewTodo();
    console.log("Adding new todo.");
}

function clickingNewTodo() {
    const button = document.querySelector(".todo");
    if (button) {
        button.addEventListener("click",newTodo);
    }
}

export {clickingNewTodo};
