// This is the addEventListener logic for a new project

import {newProject} from "./new-project.js"

function addingProject() {
    newProject();
    console.log("Adding new project.");
}

function clickingNewProject() {
    const button = document.querySelector(".project");
    button.addEventListener("click",addingProject);
}

export {clickingNewProject};