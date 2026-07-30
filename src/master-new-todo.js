// Temporarily will host entire to-do logic. Will need to break down after

// how do i target specific div's to add the to-do's to
// will model after the new project
// do i need to update the h2 as UL's as well
// add addeventlistener button logic
// appending logic to container will need to be a separate module
// need to update todos to use less files

const mainTodo = [];

class Todo {
    constructor(title,description,dueDate,priority) {
        this.id = crypto.randomUUID(); 
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    };
};

function addTodoToArray(title,description,dueDate,priority) {
    const newTodo = new Todo(title,description,dueDate,priority);
    mainTodo.push(newTodo);
    return newTodo;
}

function getTodoName(formElement) {
    const formData = new FormData(formElement);
    return addTodoToArray(
        formData.get("title"),
        formData.get("description"),
        formData.get("due-date"),
        formData.get("priority")
    );
};

function deleteTodoFromArray(id) {
    const index = mainTodo.findIndex(todo => todo.id === id);
    if (index !== -1) {
        mainTodo.splice(index,1);
    }
}

export {mainTodo, Todo, addTodoToArray, getTodoName, deleteTodoFromArray}

import {mainTodo} from "./todo-component.js"

function newTodo() {
    const toDo = document.createElement('div');
    toDo.classList.add('todo-container');
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
                    <select name="priority">
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

function renderAllTodos(){
    const todoContainer = document.querySelector("h3");
    todoContainer.innerHTML = "";
    mainTodo.forEach((todo) => {
        const todoCard = document.createElement("div");
        todoCard.classList.add("todo-card");
        todoCard.dataset.id = todo.id;
        todoCard.innerHTML = `
            <h3>To-do: ${todo.title}</h3>
            <p>Description: ${todo.description}</p>
            <small>Due: ${todo.dueDate}</small>
            <span class="priority-${todo.priority.toLowerCase()}">Priority Level: ${todo.priority}</span>
            <button class="delete">Delete</button>
        `;
          
    const deleteButton = todoCard.querySelector(".delete");
    deleteButton.addEventListener("click", (e) => {
        deleteTodoFromArray(todo.id);
        const deleteTodoContainer = e.target.closest(".todo-container")
        deleteTodoContainer.remove();
    });
    todoContainer.appendChild(todoCard);
  });
};

export {newTodo,renderAllTodos}

import {getTodoName} from "./todo-component.js"
import {newTodo,renderAllTodos} from "./todo-DOM.js"

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

function renderNewTodo() {
    const todoContainer = document.querySelector(".project-main");
    const appendNewTodo = newTodo();
    todoContainer.appendChild(appendNewTodo);
    todoSubmit(appendNewTodo);
}

function clickingNewTodo() {
    const button = document.querySelector(".todo");
    if (button) {
        button.addEventListener("click",renderNewTodo);
        console.log("Adding new todo.");
    }
}



export {todoSubmit,renderNewTodo,clickingNewTodo};



//everything below this is scratch

const mainTodo = [];

class Todo {
    constructor(title,description,dueDate,priority) {
        this.id = crypto.randomUUID(); 
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    };
};

function addTodoToArray(title,description,dueDate,priority) {
    const newTodo = new Todo(title,description,dueDate,priority);
    mainTodo.push(newTodo);
    return newTodo;
}

function getTodoName(formElement) {
    const formData = new FormData(formElement);
    return addTodoToArray(
        formData.get("title"),
        formData.get("description"),
        formData.get("due-date"),
        formData.get("priority")
    );
};

function deleteTodoFromArray(id) {
    const index = mainTodo.findIndex(todo => todo.id === id);
    if (index !== -1) {
        mainTodo.splice(index,1);
    };
};

export {mainTodo, Todo, addTodoToArray, getTodoName, deleteTodoFromArray}

import {mainTodo, deleteTodoFromArray} from "./todo-component.js"

function newTodo() {
    const toDo = document.createElement('div');
    toDo.classList.add('todo-container');
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
                    <select name="priority">
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
                <button type="button" class="cancel">Cancel</button>
            </form>
        </dialog>
        <div class="todo-target"></div>
    `;
    return toDo;
}

function renderAllTodos(){
    const todoContainer = document.querySelector(".todo-target");
    todoContainer.innerHTML = "";
    mainTodo.forEach((todo) => {
        const todoCard = document.createElement("div");
        todoCard.classList.add("todo-card");
        todoCard.dataset.id = todo.id;
        todoCard.innerHTML = `
            <h3>To-do: ${todo.title}</h3>
            <p>Description: ${todo.description}</p>
            <small>Due: ${todo.dueDate}</small>
            <span class="priority-${todo.priority.toLowerCase()}">Priority Level: ${todo.priority}</span>
            <button class="delete">Delete</button>
        `;
      
    const deleteButton = todoCard.querySelector(".delete");
    deleteButton.addEventListener("click", (e) => {
        deleteTodoFromArray(todo.id);
        todoCard.remove();
    });
    todoContainer.appendChild(todoCard);
  });
};

export {newTodo, renderAllTodos}

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
    const button = document.querySelector(".todo");
    button.forEach(button => {
        button.addEventListener("click",renderNewTodo);
    console.log("Adding new todo.");
    });
}

export {todoSubmit, renderNewTodo, clickingNewTodo};