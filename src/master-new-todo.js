// Temporarily will host entire to-do logic. Will need to break down after

// how do i target specific div's to add the to-do's to
// will model after the new project
// do i need to update the h2 as UL's as well
// add addeventlistener button logic
// appending logic to container will need to be a separate module



const mainTodo = {};

class Todo {
    constructor(title,description,dueDate,priority) {
        this.id = crypto.randomUUID(); 
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    };
};

function addTodoToArray(projectId,title,description,dueDate,priority) {
    const newTodo = new Todo(title,description,dueDate,priority);
    if (!mainTodo[projectId]) {
        mainTodo[projectId] = [];
    }
    mainTodo[projectId].push(newTodo);
    return newTodo;
}

function getTodoName(formElement, projectId) {
    const formData = new FormData(formElement);
    return addTodoToArray(
        projectId,
        formData.get("title"),
        formData.get("description"),
        formData.get("due-date"),
        formData.get("priority")
    );
};

function deleteTodoFromArray(projectId,id) {
    if (!mainTodo[projectId]) return;
    const index = mainTodo[projectId].findIndex(todo => todo.id === id);
    if (index !== -1) {
        mainTodo[projectId].splice(index,1);
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
    `;
    return toDo;
}

function renderAllTodos(projectCard,projectId){
    if (!projectCard) return;
    
    const existingCards = projectCard.querySelectorAll(".todo-card");
    existingCards.forEach(card => card.remove());

    const specificTodos = mainTodo[projectId] || [];
// need to sort buttons
// do i even need the stupid toggle button (most likely yes to keep it simple)
// buttons need to be bottom right
// 
    specificTodos.forEach((todo) => {
        const todoCard = document.createElement("div");
        todoCard.classList.add("todo-card");
        todoCard.dataset.id = todo.id;
        todoCard.innerHTML = `
            <label>
                <input type="checkbox" name="done" value="done">
            </label>

            <div class="main-fields">
                <h3>To-do: ${todo.title}</h3>
                <small>Due: ${todo.dueDate}</small>
            </div>
            
            <div class="extra-fields">
                <p>Description: ${todo.description}</p>
                <span class="priority-${todo.priority.toLowerCase()}">Priority Level: ${todo.priority}</span>
            </div>

            <div class="buttons">
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
                <button class="toggle">Show More</button>
            </div>
        `;
      
    const deleteButton = todoCard.querySelector(".delete");
    deleteButton.addEventListener("click", () => {
        deleteTodoFromArray(projectId, todo.id);
        todoCard.remove();
    });

    const toggleButton = todoCard.querySelector(".toggle");
    toggleButton.addEventListener("click", () => {
      todoCard.classList.toggle("expanded");
      
      // Dynamic button text update
      if (todoCard.classList.contains("expanded")) {
        toggleButton.textContent = "Show Less";
      } else {
        toggleButton.textContent = "Show More";
      }
    });

    projectCard.appendChild(todoCard);
  });
};

export {newTodo, renderAllTodos}

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
            const projectCard = todoButton.closest(".project-card") || todo.Button.closest(".project-main")
            if (projectCard) {
                const projectId = projectCard.dataset.projectId;
                renderNewTodo(projectCard, projectId);
            };
            }
        });
}

export {todoSubmit, renderNewTodo, clickingNewTodo};