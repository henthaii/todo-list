// This will take the DOM input and add it to HTML page.

// I believe this one is done

import {newProject} from "./new-project.js"

function renderNewProject() {
    const projectContainer = document.querySelector(".container");
    const appendNewProject = newProject();
    projectContainer.appendChild(appendNewProject);
    console.log("Appended (insert project name somehow)")
}

export {renderNewProject};