// This will manage the data and parts for controller
// and DOM

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