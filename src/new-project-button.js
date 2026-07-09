// This is the addEventListener logic for a new project

// this one is done

import {renderNewProject} from "./render-new-project.js"

function addingProject() {
    renderNewProject();
    console.log("Adding new project.");
}

function clickingNewProject() {
    const button = document.querySelector(".project");
    button.addEventListener("click",addingProject);
}

export {clickingNewProject};