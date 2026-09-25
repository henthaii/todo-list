// This will manage the data and parts for controller
// and DOM

const mainTodo = {};
const mainProjects = [];

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
     if (savedData) {
        // Mutate the existing object rather than reassigning the variable reference
        Object.assign(mainTodo, JSON.parse(savedData));
    }
    if (savedProjects) {
        // Mutate the existing array safely
        mainProjects.push(...JSON.parse(savedProjects));
    }
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
