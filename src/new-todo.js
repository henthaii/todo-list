// creating addeventlistener for making new todo
// need to append to end of targeted project

function newTodo() {
    const todoContainer = document.querySelector(".container");
    const toDo = document.createElement('div');
    todoContainer.classList.add('todo');
    toDo.innerHTML = `
        <h2>New tdo</h2> 
    `;
    todoContainer.appendChild(toDo);
    return todoContainer;
}

export {newTodo}