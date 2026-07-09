// This is the addEventListener logic for a new project

// need to fix this file since i made rendernewproject

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