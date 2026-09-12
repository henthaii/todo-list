// This will manage the visual structure and rendering

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
                    <span class="priority-${todo.priority.toLowerCase()}">Priority Level: ${todo.priority}</span>
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
      
      // Dynamic button text update
      if (todoCard.classList.contains("expanded")) {
        toggleButton.textContent = "Show Less";
      } else {
        toggleButton.textContent = "Show More";
      }
    });

    const editButton = todoCard.querySelector(".edit");
    editButton.addEventListener("click", () => {
    // We pass the existing todo object so the form knows it's editing
    renderEditTodo(projectCard, projectId, todo);
    });
    
    projectCard.appendChild(todoCard);
  });
};

export {newTodo, renderAllTodos}