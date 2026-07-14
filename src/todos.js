// this js file will contain just the todo-items logic
// items will have at a minimum title description dueDate priority 
// might include notes or even checklist

// most likely using factory or constructor classes to generate them

// can i name my project Todo's Todos? 

// eventually i should separate into new files creating new todos setting todos to complete changing todo priority etc from dom-related stuff

// should i make this file just the factory portion?

// is this similar to the library project

class Todo {
    constructor(title,description,dueDate,priority) {
        this.id = this.id; // how do i fix this to where the id starts 
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    };
};

export {Todo};