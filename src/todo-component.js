// This will manage the data and parts for controller
// and DOM

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

export {mainTodo,Todo,addTodoToArray,getTodoName}