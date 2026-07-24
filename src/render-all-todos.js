// This will loop through all todos in an array and display them.

import {mainTodo} from "./main-todo-array.js"

function renderAllTodos(){
    const todoContainer = document.querySelector(".todo-container");
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
        `;
        todoContainer.appendChild(todoCard);
    });
}

export {renderAllTodos}