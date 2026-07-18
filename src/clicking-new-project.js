// This is the addEventListener logic for a new project

import {renderNewProject} from "./render-new-project.js"

// function addingProject() {
//     renderNewProject();
//     console.log("Adding new project.");
// }

function clickingNewProject() {
    const button = document.querySelector(".project");
    if (button) {
        button.addEventListener("click",renderNewProject);
    }
}

export {clickingNewProject};