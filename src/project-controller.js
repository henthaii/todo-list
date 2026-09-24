// This will be for coordinating rendering, workflow,
// and modal event interactions.

import {newProject,getProjectName} from "./project-component.js"

// This will handle the modal info and form actions
function formSubmit(projectElement) {
    const form = projectElement.querySelector("#project-form");
    const heading = projectElement.querySelector('h2');
    const dialog = projectElement.querySelector('#project-dialog');
    const cancelButton = projectElement.querySelector('.cancel');
    const cancelXButton = projectElement.querySelector('.cancel-x');

    dialog.showModal();

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const projectName = getProjectName(form);
        const projectId = crypto.randomUUID(); 
        
        heading.textContent = projectName;
        projectElement.dataset.projectId = projectId; 
        
        addProjectToData(projectId, projectName);
        
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

export function renderSavedProject(id, name) {
    const projectContainer = document.querySelector(".container");
    const projectElement = newProject();
    
    // Set the data directly instead of showing a modal form
    projectElement.dataset.projectId = id;
    projectElement.querySelector('h2').textContent = name;
    
    // Remove the dialog setup completely since it's an existing project
    const dialog = projectElement.querySelector('#project-dialog');
    if (dialog) dialog.remove();
    
    projectContainer.appendChild(projectElement);
    return projectElement; // return this so index.js can pass it to renderAllTodos
}

export {clickingNewProject};