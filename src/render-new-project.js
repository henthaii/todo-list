// This will take the DOM input and add it to HTML page.

import {newProject} from "./new-project.js"
import {formSubmit} from "./form-submit.js"

function renderNewProject() {
    const projectContainer = document.querySelector(".container");
    const appendNewProject = newProject();
    projectContainer.appendChild(appendNewProject);
    formSubmit(appendNewProject);
}

export {renderNewProject};