// file is used for visual assistance, will not be used for index

// how tf do i add a new array based on newproject being created


// not sure if i need this section, started copying but hten it deviated
const projects = [];

class Project {
    constructor(name) {
        this.id = crypto.randomUUID();
        this.name = name;
        this.todos = [];
    }
}

function addProjectToArray(name) {
    const project = new Project(name);
    project.push(project);
    return project;
}

// ends here

function newProject() {
    const project = document.createElement('div');
    project.classList.add('project-card');
    project.innerHTML = `
        <dialog id="dialog">
            <form id="project-form">
                <button type="button" class="cancel-x">x</button>
                <div class="label">
                    <label for="project-name">Project Name:</label>
                    <input type="text" name="project-name" id="project-name">
                </div>
                <button type="submit">Submit</button>
                <button type="button" class="cancel">Cancel</button>
            </form>
        </dialog>
        <h2></h2>
        <button class="todo">New To-Do</button>
    `;
    return project;
}


// Form information handler/data extraction
function getProjectName(formElement) {
    const formData = new FormData(formElement);
    return formData.get("project-name");
}

export {newProject,getProjectName}

import {newProject,getProjectName} from "./project-component.js"

// This will handle the modal info and form actions
function formSubmit(projectElement) {
    const form = projectElement.querySelector("#project-form");
    const heading = projectElement.querySelector('h2');
    const dialog = projectElement.querySelector('#dialog');
    const cancelButton = projectElement.querySelector('.cancel');
    const cancelXButton = projectElement.querySelector('.cancel-x');

    dialog.showModal();

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        heading.textContent = getProjectName(form);
        dialog.close();
        dialog.remove();
    });

    cancelButton.addEventListener('click', () => {
        dialog.close();
        projectElement.remove();
    });

    cancelXButton.addEventListener('click', () => {
        dialog.close();
        projectElement.remove();
    }); 
}


// This will handle adding the new project to the UI
function renderNewProject() {
    const projectContainer = document.querySelector(".container");
    const appendNewProject = newProject();
    projectContainer.appendChild(appendNewProject); // adds the newProject logic (adding DOM elements) to the container
    formSubmit(appendNewProject); // adds DOM to the formSubmit function and fills in the "projectElement", also adds the form data
}


// Initializing clicks
function clickingNewProject() {
    const button = document.querySelector(".project");
    if (button) {
        button.addEventListener("click",() => {
            renderNewProject();
            console.log("Adding new project.");
        });
    }
}

export {clickingNewProject};