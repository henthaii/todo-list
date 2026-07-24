// This will loop through all todos in an array and display them.

import {mainTodo} from "./main-todo-array.js"

function renderAllTodos(){
    const todoContainer = document.querySelector("h3");
    todoContainer.innerHTML = "";
    mainTodo.forEach((todo) => {
        const todoCard = document.createElement("div");
        todoCard.classList.add("todo-card");

        todoCard.innerHTML = `
            <h3>${todo.title}</h3>
            <p>${todo.description}</p>
            <small>Due: ${todo.dueDate}</small>
            <span class="priority-${todo.priority.toLowerCase()}">${todo.priority}</span>
        
        `;
        todoContainer.appendChild(todoCard);
    });
}