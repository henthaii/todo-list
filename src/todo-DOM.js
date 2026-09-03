// This will manage the visual structure and rendering

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

    specificTodos.forEach((todo) => {
        const todoCard = document.createElement("div");
        todoCard.classList.add("todo-card");
        todoCard.dataset.id = todo.id;
        todoCard.innerHTML = `
            <h3>To-do: ${todo.title}</h3>
            <small>Due: ${todo.dueDate}</small>
            
            <div class="extra-fields">
                <p>Description: ${todo.description}</p>
                <span class="priority-${todo.priority.toLowerCase()}">Priority Level: ${todo.priority}</span>
            </div>

            <button class="delete">Delete</button>
            <button class="toggle">Show More</button>
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