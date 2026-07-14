// Temporarily will host entire to-do logic. Will need to break down after

// to-do need to be a class?
// how do i target specific div's to add the to-do's to
// will model after the new project

function newTodo() {
    const todoContainer = document.querySelector(".container");
    const toDo = document.createElement('div');
    toDo.classList.add('todo-card');
    toDo.innerHTML = `
        <dialog id="dialog">
            <form id="project-form">
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
                    <input type="text" name="priority" id="priority">
                </div>
                <div class="label">
                    <input type="checkbox" name="checklist" id="checklist">
                </div>
                <button type="submit">Submit</button>
                <button type="button" class="cancel">Cancel</button>
            </form>
        </dialog>
        <h2></h2>
    `;
    todoContainer.appendChild(toDo);
    return toDo;
}

export {newTodo}