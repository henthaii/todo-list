// Temporarily will host entire to-do logic. Will need to break down after

// how do i target specific div's to add the to-do's to
// will model after the new project
// do i need to update the h2 as UL's as well
// add addeventlistener button logic
// appending logic to container will need to be a separate module

let mainTodo = {};
let mainProjects = [];

class Todo {
    constructor(title,description,dueDate,priority) {
        this.id = crypto.randomUUID(); 
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    };
};

function saveToLocalStorage() {
    localStorage.setItem("mainTodo", JSON.stringify(mainTodo));
    localStorage.setItem("mainProjects", JSON.stringify(mainProjects));
}

function loadFromLocalStorage() {
    const savedData = localStorage.getItem("mainTodo");
    const savedProjects = localStorage.getItem("mainProjects");
     mainTodo = savedTodo ? JSON.parse(savedTodo) : {};
    mainProjects = savedProjects ? JSON.parse(savedProjects) : [];
    
}
loadFromLocalStorage();

function addProjectToData(id, name) {
    mainProjects.push({ id, name });
    saveToLocalStorage();
}

function addTodoToArray(projectId,title,description,dueDate,priority) {
    const newTodo = new Todo(title,description,dueDate,priority);
    if (!mainTodo[projectId]) {
        mainTodo[projectId] = [];
    }
    mainTodo[projectId].push(newTodo);
    saveToLocalStorage();
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
        saveToLocalStorage();
    };
};

function updateTodoInArray(projectId, id, title, description, dueDate, priority) {
  if (!mainTodo[projectId]) return null;
  const todo = mainTodo[projectId].find(t => t.id === id);
  if (todo) {
    todo.title = title;
    todo.description = description;
    todo.dueDate = dueDate;
    todo.priority = priority;

    saveToLocalStorage();
  }
  return todo;
}

export { mainTodo, mainProjects, addProjectToData, addTodoToArray, deleteTodoFromArray, updateTodoInArray, getTodoName};


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

import {mainTodo, deleteTodoFromArray, updateTodoInArray} from "./todo-component.js"
import {renderEditTodo} from "./todo-controller.js"

function newTodo() {
    const toDo = document.createElement('div');
    toDo.classList.add('todo-container');
    toDo.innerHTML = `
        <dialog class="todo-dialog">
            <form class="todo-form">
                <button type="button" class="cancel-x">x</button>
                <div class="todo-fields">
                    <div class="label">
                        <label for="title">Title:</label>
                        <input type="text" name="title" id="title">
                    </div>
                    <div class="label">
                        <label for="due-date">Due Date:</label>
                        <input type="date" name="due-date" id="due-date">
                    </div>
                    <div class="label">
                        <label for="description">Description:</label>
                        <input type="text" name="description" id="description">
                    </div>
                    <div class="label">
                        <label for="priority">Priority:</label>
                        <select name="priority">
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
                    </div>
                    <div class="dialog-buttons">
                        <button type="submit">Submit</button>
                        <button type="button" class="cancel">Cancel</button>
                    </div>
                </div>
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

    specificTodos.forEach((todo) => {
        const todoCard = document.createElement("div");
        todoCard.classList.add("todo-card");
        todoCard.dataset.id = todo.id;
        todoCard.innerHTML = `
            <label>
                <input type="checkbox" name="done" value="done">
            </label>
            <div class="todo-fields">
                <div class="main-fields">
                    <h3>To-do: ${todo.title}</h3>
                    <p>Due: ${todo.dueDate}</small>
                </div>
                <div class="extra-fields">
                    <p>Description: ${todo.description}</p>
                    <p class="priority-${todo.priority.toLowerCase()}">Priority Level: ${todo.priority}</p>
                </div>
                <div class="buttons">
                    <button class="edit">Edit</button>
                    <button class="delete">Delete</button>
                    <button class="toggle">Show More</button>
                </div>
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
      
      if (todoCard.classList.contains("expanded")) {
        toggleButton.textContent = "Show Less";
      } else {
        toggleButton.textContent = "Show More";
      }
    });

    const editButton = todoCard.querySelector(".edit");
    editButton.addEventListener("click", () => {
    renderEditTodo(projectCard, projectId, todo);
    });
    
    projectCard.appendChild(todoCard);
  });
};

export {newTodo, renderAllTodos}