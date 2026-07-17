// file is used for visual assistance, will not be used for index

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
    `;
    return project;
}

export {newProject};

function getProjectName(formElement) {
    const formData = new FormData(formElement);
    return formData.get("project-name");
}

export {getProjectName}

import {getProjectName} from "./get-project-name.js"

function formSubmit(projectElement) {
    const form = projectElement.querySelector("#project-form");
    const heading = projectElement.querySelector('h2');
    const dialog = projectElement.querySelector('#dialog');
    const cancelButton = projectElement.querySelector('.cancel');
    const cancelXButton = projectElement.querySelector('.cancel-x');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        heading.textContent = getProjectName(form);
        dialog.close();
    });

    cancelButton.addEventListener('click', () => {
        dialog.close();
        projectElement.remove();
    });

    cancelXButton.addEventListener('click', () => {
        dialog.close();
        projectElement.remove();
    }); 

    dialog.showModal();
}

export {formSubmit}

import {newProject} from "./new-project.js"
import {formSubmit} from "./form-submit.js"

function renderNewProject() {
    const projectContainer = document.querySelector(".container");
    const appendNewProject = newProject();
    projectContainer.appendChild(appendNewProject);
    formSubmit(appendNewProject);
}

export {renderNewProject};

import {renderNewProject} from "./render-new-project.js"

function addingProject() {
    renderNewProject();
    console.log("Adding new project.");
}

function clickingNewProject() {
    const button = document.querySelector(".project");
    if (button) {
        button.addEventListener("click",addingProject);
    }
}

export {clickingNewProject};